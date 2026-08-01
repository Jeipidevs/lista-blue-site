"use client";

import { useMemo } from "react";
import { BLUE_PROPERTIES } from "@/data/properties";
import { TrendingDown, Sparkles, Building2, Tag, ArrowUpRight } from "lucide-react";

interface MarketStatsProps {
  selectedCondo?: string;
}

export default function MarketStats({ selectedCondo = "todos" }: MarketStatsProps) {
  const metrics = useMemo(() => {
    const filtered = BLUE_PROPERTIES.filter((p) => {
      if (selectedCondo !== "todos" && p.condoSlug !== selectedCondo) return false;
      return true;
    });

    const total = filtered.length;
    const prices = filtered.map((p) => p.price).filter((p) => p > 0);
    const pricesM2 = filtered.map((p) => p.pricePerM2).filter((p) => p > 0);

    const avgPrice = total > 0 ? Math.round(prices.reduce((a, b) => a + b, 0) / total) : 0;
    const avgPricePerM2 = total > 0 ? Math.round(pricesM2.reduce((a, b) => a + b, 0) / total) : 0;
    const maxPrice = prices.length ? Math.max(...prices) : 0;
    const minPrice = prices.length ? Math.min(...prices) : 0;
    const priceDrops = filtered.filter((p) => p.status === "preco_reduzido" || p.originalPrice).length;

    const condoName =
      selectedCondo === "todos"
        ? "Todos os Condomínios"
        : filtered[0]?.condoName || selectedCondo.toUpperCase();

    return {
      total,
      avgPrice,
      avgPricePerM2,
      maxPrice,
      minPrice,
      priceDrops,
      condoName,
    };
  }, [selectedCondo]);

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
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
              Indicadores do {metrics.condoName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Panorama de anúncios ativos, variação de preço por m² e oportunidades mapeadas.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-remax-red/30 shadow-sm self-start sm:self-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black text-remax-navy">
              {metrics.total} Imóveis Catalogados
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
              {formatMoney(metrics.avgPrice)}
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1 flex items-center gap-1">
              <span>Faixa:</span>
              <span className="font-bold text-slate-700">
                {formatMoney(metrics.minPrice)} a {formatMoney(metrics.maxPrice)}
              </span>
            </div>
          </div>

          {/* Card 2: Preço Médio m² */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Média por m²</span>
              <Building2 className="w-4 h-4 text-remax-navy" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-remax-navy tracking-tight">
              {formatMoney(metrics.avgPricePerM2)} <span className="text-xs font-normal text-slate-500">/m²</span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              Média do m² nos condomínios de luxo
            </div>
          </div>

          {/* Card 3: Reduções de Preço */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Oportunidades</span>
              <TrendingDown className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-emerald-700 tracking-tight flex items-center gap-1">
              {metrics.priceDrops} Casas
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                Preço Reduzido
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              Descontos de até <span className="font-bold text-emerald-700">R$ 150.000</span>
            </div>
          </div>

          {/* Card 4: Cobertura de Portais */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-remax-red/25 shadow-sm hover:border-remax-red transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Portais Mapeados</span>
              <ArrowUpRight className="w-4 h-4 text-remax-red" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-remax-navy tracking-tight flex items-center gap-1">
              Capão Sul & Auxiliadora
            </div>
            <div className="text-[11px] font-medium text-slate-500 mt-1">
              ZAP, VivaReal, RE/MAX & OLX
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
