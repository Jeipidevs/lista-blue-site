"use client";

import { useState } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Eye, 
  BedDouble, 
  Maximize2, 
  Car, 
  Building2,
  TrendingDown,
  Sparkles,
  Waves
} from "lucide-react";

interface PropertyTableViewProps {
  properties: Property[];
  onSelectProperty: (p: Property) => void;
}

export default function PropertyTableView({ properties, onSelectProperty }: PropertyTableViewProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const copyForClient = (p: Property, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `🏡 *${p.code} - ${p.condoName}*\n` +
      `💰 *Valor:* ${formatMoney(p.price)} (${formatMoney(p.pricePerM2)}/m²)\n` +
      `📐 *Área:* ${p.area}m² | *Suítes:* ${p.suites} | *Vagas:* ${p.garages}\n` +
      `${p.isLakefront ? '🌊 *Beira Lago*\n' : ''}` +
      `${p.isFurnished ? '✨ *Mobiliada e Decorada*\n' : ''}` +
      `📌 *Portal:* ${p.portalLinks[0]?.url || 'Consultar Corretor VIP'}\n\n` +
      `Fale com a RE/MAX VIP para agendar visita!`;

    navigator.clipboard.writeText(text);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-remax-red/30 shadow-glass overflow-hidden my-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-remax-red/40">
              <th className="py-4 px-4">Foto / Imóvel</th>
              <th className="py-4 px-4">Condomínio</th>
              <th className="py-4 px-4">Valor (R$)</th>
              <th className="py-4 px-4">Área / m²</th>
              <th className="py-4 px-4">Especificações</th>
              <th className="py-4 px-4">Status / Destaques</th>
              <th className="py-4 px-4">Portal de Origem</th>
              <th className="py-4 px-4 text-right">Ações do Corretor</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-200/80 text-xs font-bold text-slate-700">
            {properties.map((prop) => (
              <tr
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
              >
                
                {/* Imóvel & Thumbnail */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                      {prop.images[0] ? (
                        <Image src={prop.images[0]} alt="" fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-200" />
                      )}
                    </div>
                    <div>
                      <span className="bg-remax-navy text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                        {prop.code}
                      </span>
                      <h4 className="text-xs font-black text-remax-navy group-hover:text-remax-red transition-colors line-clamp-1 mt-0.5">
                        {prop.title}
                      </h4>
                    </div>
                  </div>
                </td>

                {/* Condomínio */}
                <td className="py-3 px-4">
                  <span className="font-black text-remax-navy bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                    {prop.condoName}
                  </span>
                </td>

                {/* Valor */}
                <td className="py-3 px-4">
                  <div className="text-sm font-black text-remax-navy">
                    {formatMoney(prop.price)}
                  </div>
                  {prop.originalPrice && (
                    <div className="text-[10px] font-bold text-slate-400 line-through">
                      {formatMoney(prop.originalPrice)}
                    </div>
                  )}
                </td>

                {/* Área & Valor/m² */}
                <td className="py-3 px-4">
                  <div className="font-black text-slate-800">{prop.area} m²</div>
                  <div className="text-[11px] font-bold text-remax-red">{formatMoney(prop.pricePerM2)} / m²</div>
                </td>

                {/* Especificações (Suítes, Banheiros, Vagas) */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2 text-slate-600 font-bold">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5 text-remax-navy" /> {prop.suites} Suítes
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-remax-navy" /> {prop.garages} Vagas
                    </span>
                  </div>
                </td>

                {/* Status / Destaques */}
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {prop.isLakefront && (
                      <span className="bg-sky-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Waves className="w-2.5 h-2.5" /> Lago
                      </span>
                    )}
                    {prop.status === "preco_reduzido" && (
                      <span className="bg-remax-red text-white text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                        <TrendingDown className="w-2.5 h-2.5" /> Baixou
                      </span>
                    )}
                    {prop.isFurnished && (
                      <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Mobiliada
                      </span>
                    )}
                  </div>
                </td>

                {/* Portal Origem */}
                <td className="py-3 px-4">
                  {prop.portalLinks[0] ? (
                    <a
                      href={prop.portalLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-black text-slate-700 hover:text-remax-red bg-slate-100 hover:bg-remax-red/10 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
                    >
                      <span>{prop.portalLinks[0].name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </td>

                {/* Ações do Corretor */}
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    
                    {/* Copy for Client Button */}
                    <button
                      onClick={(e) => copyForClient(prop, e)}
                      title="Copiar dados formatados para enviar ao cliente"
                      className={`p-2 rounded-lg border text-xs font-black transition-all flex items-center gap-1 ${
                        copiedId === prop.id
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-slate-100 hover:bg-remax-red/10 text-slate-700 hover:text-remax-red border-slate-200"
                      }`}
                    >
                      {copiedId === prop.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="hidden xl:inline">
                        {copiedId === prop.id ? "Copiado!" : "Copiar p/ Cliente"}
                      </span>
                    </button>

                    {/* View Details */}
                    <button
                      onClick={() => onSelectProperty(prop)}
                      title="Ver Ficha Técnica"
                      className="p-2 bg-remax-navy hover:bg-slate-800 text-white rounded-lg border border-remax-navy text-xs font-black transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
