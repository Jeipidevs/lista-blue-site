"use client";

import { CONDO_METRICS } from "@/data/properties";
import { TrendingDown, Sparkles, Building2, Tag, ArrowUpRight } from "lucide-react";

export default function MarketStats() {
  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="my-8">
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100/60 rounded-3xl p-6 sm:p-8 border-2 border-remax-red/20 shadow-glass">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-remax-navy text-white text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md">
                Radar Litoral — RE/MAX VIP
              </span>
              <span className="text-xs font-bold text-remax-red flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Inteligência de Mercado
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-remax-navy tracking-tight mt-1">
              Indicadores do Condomínio Blue
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Panorama consolidado de todos os anúncios ativos e histórico de negociações no condomínio.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-remax-red/30 shadow-sm self-start sm:self-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black text-remax-navy">
              38 Casas Catalogadas
            </span>
          </div>
        </div>

        {/* Grid of Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Preço Médio */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Preço Médio</span>
              <Tag className="w-4 h-4 text-remax-red" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-remax-navy tracking-tight">
              {formatMoney(CONDO_METRICS.avgPrice)}
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1 flex items-center gap-1">
              <span>Faixa:</span>
              <span className="font-bold text-slate-700">R$ 1,98M a R$ 7,8M</span>
            </div>
          </div>

          {/* Card 2: Preço Médio m² */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Média por m²</span>
              <Building2 className="w-4 h-4 text-remax-navy" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-remax-navy tracking-tight">
              {formatMoney(CONDO_METRICS.avgPricePerM2)} <span className="text-xs font-normal text-slate-500">/m²</span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              Área construída média: <span className="font-bold text-slate-700">385 m²</span>
            </div>
          </div>

          {/* Card 3: Reduções de Preço */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Oportunidades</span>
              <TrendingDown className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-emerald-700 tracking-tight flex items-center gap-1">
              {CONDO_METRICS.priceDrops} Casas
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                Preço Reduzido
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              Descontos de até <span className="font-bold text-emerald-700">R$ 310.000</span>
            </div>
          </div>

          {/* Card 4: Novas Ofertas */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Entradas Recentes</span>
              <ArrowUpRight className="w-4 h-4 text-remax-red" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-remax-navy tracking-tight flex items-center gap-1">
              {CONDO_METRICS.newAnnouncements} Novidades
              <span className="text-xs font-bold bg-remax-red/10 text-remax-red px-2 py-0.5 rounded-full">
                Últimos 30 dias
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              2 Beira de Lago | 1 Lançamento
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
