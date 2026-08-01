"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import CondoSelector from "@/components/CondoSelector";
import MarketStats from "@/components/MarketStats";
import FilterBar from "@/components/FilterBar";
import ExcelExportButton from "@/components/ExcelExportButton";
import RadarAIModule from "@/components/RadarAIModule";
import PropertyCard from "@/components/PropertyCard";
import PropertyTableView from "@/components/PropertyTableView";
import PropertyModal from "@/components/PropertyModal";
import Footer from "@/components/Footer";
import { BLUE_PROPERTIES, Property } from "@/data/properties";
import { Home, LayoutGrid, Table, Building2, RefreshCw } from "lucide-react";

export default function HomePage() {
  const [selectedCondo, setSelectedCondo] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("todos");
  const [minSuites, setMinSuites] = useState(0);
  const [sortBy, setSortBy] = useState("relevancia");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Count houses per condo
  const condoCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: BLUE_PROPERTIES.length };
    BLUE_PROPERTIES.forEach((p) => {
      const slug = p.condoSlug || "blue";
      counts[slug] = (counts[slug] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and Sort Properties
  const filteredProperties = useMemo(() => {
    return BLUE_PROPERTIES.filter((prop) => {
      if (selectedCondo !== "todos" && prop.condoSlug !== selectedCondo) {
        return false;
      }

      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        prop.title.toLowerCase().includes(searchLower) ||
        prop.code.toLowerCase().includes(searchLower) ||
        (prop.condoName && prop.condoName.toLowerCase().includes(searchLower)) ||
        prop.description.toLowerCase().includes(searchLower) ||
        prop.features.some((f) => f.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      if (selectedTag === "beira_lago" && !prop.isLakefront) return false;
      if (selectedTag === "preco_reduzido" && prop.status !== "preco_reduzido") return false;
      if (selectedTag === "mobiliada" && !prop.isFurnished) return false;

      if (minSuites > 0 && prop.suites < minSuites) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "menor_preco") return a.price - b.price;
      if (sortBy === "maior_preco") return b.price - a.price;
      if (sortBy === "maior_area") return a.area - b.area;
      if (sortBy === "menor_m2") return a.pricePerM2 - b.pricePerM2;
      return 0;
    });
  }, [selectedCondo, searchTerm, selectedTag, minSuites, sortBy]);

  const resetFilters = () => {
    setSelectedCondo("todos");
    setSearchTerm("");
    setSelectedTag("todos");
    setMinSuites(0);
    setSortBy("relevancia");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Header Bar */}
      <Navbar selectedCondo={selectedCondo} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Condo Selector Strip */}
        <CondoSelector
          selectedCondo={selectedCondo}
          onSelectCondo={(slug) => setSelectedCondo(slug)}
          condoCounts={condoCounts}
        />

        {/* Operational Market Analytics */}
        <MarketStats selectedCondo={selectedCondo} />

        {/* Radar AI Assistant Module */}
        <RadarAIModule selectedCondo={selectedCondo} />

        {/* Filter Controls Header & View Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
          
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black text-remax-navy tracking-tight flex items-center gap-2">
              <Building2 className="w-5 h-5 text-remax-red" />
              <span>Estoque Mapeado ({filteredProperties.length})</span>
            </h2>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-200 p-1 rounded-xl border border-slate-300">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg text-xs font-black flex items-center gap-1 transition-all ${
                  viewMode === "grid" ? "bg-white text-remax-navy shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
                title="Modo Cards"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden md:inline">Cards</span>
              </button>

              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg text-xs font-black flex items-center gap-1 transition-all ${
                  viewMode === "table" ? "bg-white text-remax-navy shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
                title="Modo Tabela Densada"
              >
                <Table className="w-4 h-4" />
                <span className="hidden md:inline">Tabela</span>
              </button>
            </div>
          </div>

          <ExcelExportButton selectedCondo={selectedCondo} />
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          minSuites={minSuites}
          setMinSuites={setMinSuites}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resetFilters={resetFilters}
          totalResults={filteredProperties.length}
        />

        {/* Property Grid or Table View */}
        {filteredProperties.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelectProperty={(p) => setSelectedProperty(p)}
                />
              ))}
            </div>
          ) : (
            <PropertyTableView
              properties={filteredProperties}
              onSelectProperty={(p) => setSelectedProperty(p)}
            />
          )
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-300 my-8">
            <Home className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-black text-remax-navy">Nenhum imóvel no filtro</h3>
            <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto mt-1 mb-4">
              Não encontramos imóveis correspondentes aos parâmetros informados.
            </p>
            <button
              onClick={resetFilters}
              className="bg-remax-red text-white text-xs font-black px-5 py-2.5 rounded-xl hover:bg-remax-red-hover transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Limpar Filtros de Busca</span>
            </button>
          </div>
        )}

      </main>

      {/* Property Modal View */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Footer Component */}
      <Footer />

    </div>
  );
}
