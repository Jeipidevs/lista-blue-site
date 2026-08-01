"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import MarketStats from "@/components/MarketStats";
import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";
import PropertyModal from "@/components/PropertyModal";
import Footer from "@/components/Footer";
import { BLUE_PROPERTIES, Property } from "@/data/properties";
import { Home, Sparkles, SlidersHorizontal, MessageCircle, Waves, CheckCircle } from "lucide-react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("todos");
  const [minSuites, setMinSuites] = useState(0);
  const [sortBy, setSortBy] = useState("relevancia");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter and Sort Logic
  const filteredProperties = useMemo(() => {
    return BLUE_PROPERTIES.filter((prop) => {
      // Search term filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        prop.title.toLowerCase().includes(searchLower) ||
        prop.code.toLowerCase().includes(searchLower) ||
        prop.description.toLowerCase().includes(searchLower) ||
        prop.features.some((f) => f.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      // Category Tag filter
      if (selectedTag === "beira_lago" && !prop.isLakefront) return false;
      if (selectedTag === "preco_reduzido" && prop.status !== "preco_reduzido") return false;
      if (selectedTag === "mobiliada" && !prop.isFurnished) return false;

      // Min Suites filter
      if (minSuites > 0 && prop.suites < minSuites) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "menor_preco") return a.price - b.price;
      if (sortBy === "maior_preco") return b.price - a.price;
      if (sortBy === "maior_area") return b.area - a.area;
      if (sortBy === "menor_m2") return a.pricePerM2 - b.pricePerM2;
      return 0; // relevancia (default)
    });
  }, [searchTerm, selectedTag, minSuites, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedTag("todos");
    setMinSuites(0);
    setSortBy("relevancia");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Header Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Apple Style Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border-2 border-remax-red/40 shadow-2xl mb-8">
          
          {/* Background Decorative Gradient & Glass Accent */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-remax-red/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-remax-navy/40 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-black tracking-widest text-remax-red uppercase">
              <Sparkles className="w-4 h-4 text-remax-red" />
              <span>Condomínio Blue — Capão da Canoa / Xangri-Lá</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Todas as Casas à Venda no <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-remax-red">Condomínio Blue</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Consolidado oficial da <strong>RE/MAX VIP</strong>. Navegue pelas fotos em alta resolução de cada imóvel, confira o histórico de preços e acesse os links dos anúncios originais em todos os portais.
            </p>

            {/* Quick Badges Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Setas de troca de foto no card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Links diretos para ZAP, VivaReal, OLX & RE/MAX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Histórico de redução de valores</span>
              </div>
            </div>

          </div>
        </section>

        {/* Market Analytics Section (Radar Litoral) */}
        <MarketStats />

        {/* Filter and Search Controls */}
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

        {/* Property Grid Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-remax-navy tracking-tight">
              Imóveis Disponíveis no Blue
            </h2>
            <p className="text-xs text-slate-500 font-bold">
              Utilize as setas dentro de cada card para alternar as fotos do imóvel.
            </p>
          </div>

          <div className="text-xs font-black text-remax-red bg-remax-red/10 px-3 py-1.5 rounded-xl border border-remax-red/20">
            {filteredProperties.length} imóveis encontrados
          </div>
        </div>

        {/* Property Cards Grid */}
        {filteredProperties.length > 0 ? (
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
          /* Empty State */
          <div className="bg-slate-50 rounded-3xl p-12 text-center border-2 border-dashed border-slate-300 my-8">
            <Home className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-black text-remax-navy">Nenhum imóvel encontrado</h3>
            <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto mt-1 mb-4">
              Não encontramos nenhuma casa no Condomínio Blue correspondente aos filtros selecionados.
            </p>
            <button
              onClick={resetFilters}
              className="bg-remax-red text-white text-xs font-black px-5 py-2.5 rounded-xl hover:bg-remax-red-hover transition-colors shadow-sm"
            >
              Limpar Filtros de Busca
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
