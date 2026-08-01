"use client";

import { CONDOMINIUMS_LIST } from "@/data/properties";
import { Building2, Sparkles } from "lucide-react";

interface CondoSelectorProps {
  selectedCondo: string;
  onSelectCondo: (slug: string) => void;
  condoCounts?: Record<string, number>;
}

export default function CondoSelector({ selectedCondo, onSelectCondo, condoCounts }: CondoSelectorProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-remax-red" />
          <h2 className="text-sm font-black uppercase tracking-wider text-remax-navy">
            Selecione o Condomínio (Xangri-Lá / Capão)
          </h2>
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          7 Condomínios de Alto Padrão Mapeados
        </span>
      </div>

      {/* Condominium Tabs Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
        {CONDOMINIUMS_LIST.map((condo) => {
          const isActive = selectedCondo === condo.slug;
          const count = condoCounts ? condoCounts[condo.slug] : undefined;

          return (
            <button
              key={condo.slug}
              onClick={() => onSelectCondo(condo.slug)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all border-2 ${
                isActive
                  ? "bg-remax-navy text-white border-remax-red shadow-md scale-[1.02]"
                  : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-remax-red/40"
              }`}
            >
              {condo.slug === "blue" && <Sparkles className="w-4 h-4 text-sky-400" />}
              <span>{condo.name}</span>
              {count !== undefined && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                    isActive ? "bg-remax-red text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
