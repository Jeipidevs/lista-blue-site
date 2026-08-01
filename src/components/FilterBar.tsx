"use client";

import { Search, SlidersHorizontal, RotateCcw, Waves, Sparkles, Flame, Check } from "lucide-react";

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedTag: string;
  setSelectedTag: (v: string) => void;
  minSuites: number;
  setMinSuites: (v: number) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  resetFilters: () => void;
  totalResults: number;
}

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
  minSuites,
  setMinSuites,
  sortBy,
  setSortBy,
  resetFilters,
  totalResults,
}: FilterBarProps) {
  
  const tagOptions = [
    { id: "todos", label: "Todas as Casas" },
    { id: "beira_lago", label: "Beira do Lago", icon: Waves },
    { id: "preco_reduzido", label: "Preço Reduzido", icon: Flame },
    { id: "mobiliada", label: "Mobiliadas", icon: Sparkles },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-remax-red/30 shadow-glass mb-8">
      
      {/* Top Search Input Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por código (ex: CASA 214), características (ex: Elevador, Lago)..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-remax-navy placeholder:text-slate-400 focus:outline-none focus:border-remax-red focus:ring-2 focus:ring-remax-red/20 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-remax-red"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 min-w-[200px]">
            <SlidersHorizontal className="w-4 h-4 text-remax-red" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Ordenar imóveis"
              className="bg-transparent border-none text-xs sm:text-sm font-black text-remax-navy focus:outline-none cursor-pointer w-full"
            >
              <option value="relevancia">Ordenar: Recomendados</option>
              <option value="menor_preco">Menor Preço</option>
              <option value="maior_preco">Maior Preço</option>
              <option value="maior_area">Maior Metragem (m²)</option>
              <option value="menor_m2">Menor Valor por m²</option>
            </select>
          </div>

          <button
            onClick={resetFilters}
            title="Resetar Filtros"
            className="flex items-center justify-center p-3.5 bg-slate-100 hover:bg-remax-red/10 hover:text-remax-red text-slate-600 rounded-2xl transition-colors border border-slate-200"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Filter Tags & Minimum Suites Filter */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        
        {/* Category Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tagOptions.map((tag) => {
            const Icon = tag.icon;
            const isActive = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(isActive ? "todos" : tag.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                  isActive
                    ? "bg-remax-navy text-white border-remax-navy shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-remax-red/40"
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? "text-remax-red" : "text-slate-500"}`} />}
                <span>{tag.label}</span>
                {isActive && <Check className="w-3 h-3 text-remax-red ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Suites Selector & Count Indicator */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-500">Mínimo Suítes:</span>
            {[0, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setMinSuites(num)}
                className={`px-2 py-0.5 rounded-md font-black text-xs transition-all ${
                  minSuites === num
                    ? "bg-remax-red text-white"
                    : "text-slate-600 hover:text-remax-navy"
                }`}
              >
                {num === 0 ? "Todas" : `${num}+`}
              </button>
            ))}
          </div>

          <div className="hidden sm:block text-slate-500 font-bold">
            Exibindo <span className="text-remax-red font-black text-sm">{totalResults}</span> casas
          </div>
        </div>

      </div>

    </div>
  );
}
