"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { 
  ChevronLeft, 
  ChevronRight, 
  BedDouble, 
  Bath, 
  Car, 
  Maximize2, 
  ExternalLink, 
  TrendingDown, 
  Sparkles, 
  MapPin, 
  Waves,
  Eye,
  Copy,
  Check
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
  onSelectProperty: (p: Property) => void;
}

export default function PropertyCard({ property, onSelectProperty }: PropertyCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const copyForClient = (e: MouseEvent) => {
    e.stopPropagation();
    const text = `🏡 *${property.code} - ${property.condoName}*\n` +
      `💰 *Valor:* ${formatMoney(property.price)} (${formatMoney(property.pricePerM2)}/m²)\n` +
      `📐 *Área:* ${property.area}m² | *Suítes:* ${property.suites} | *Vagas:* ${property.garages}\n` +
      `${property.isLakefront ? '🌊 *Beira Lago*\n' : ''}` +
      `${property.isFurnished ? '✨ *Mobiliada e Decorada*\n' : ''}` +
      `📌 *Anúncio Origem:* ${property.portalLinks[0]?.url || 'RE/MAX VIP'}\n\n` +
      `Fale com a RE/MAX VIP para agendar visita!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div 
      onClick={() => onSelectProperty(property)}
      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-remax-red/35 hover:border-remax-red shadow-md hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      
      {/* Photo Carousel Container */}
      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
        
        {/* Image */}
        {property.images[currentImgIndex] ? (
          <Image
            src={property.images[currentImgIndex]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-400 text-xs font-bold">
            Sem Foto
          </div>
        )}

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Badges on Top Image */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-remax-navy text-white text-[11px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-md border border-white/20">
              {property.code}
            </span>
            
            {property.isLakefront && (
              <span className="bg-sky-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                <Waves className="w-3 h-3" /> Beira Lago
              </span>
            )}

            {property.status === 'preco_reduzido' && (
              <span className="bg-remax-red text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> Baixou
              </span>
            )}

            {property.isFurnished && (
              <span className="bg-amber-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-md hidden sm:inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Mobiliada
              </span>
            )}
          </div>

          {/* Photo Counter */}
          <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg border border-white/20">
            {currentImgIndex + 1} / {property.images.length || 1}
          </span>
        </div>

        {/* Carousel Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-remax-navy hover:text-remax-red flex items-center justify-center backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-md border border-remax-red/30 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 stroke-[3]" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-remax-navy hover:text-remax-red flex items-center justify-center backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-md border border-remax-red/30 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none">
            {property.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImgIndex
                    ? "w-5 bg-remax-red"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Card Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            <MapPin className="w-3.5 h-3.5 text-remax-red" />
            <span>{property.condoName || "Condomínio Blue"}</span>
          </div>

          <h3 className="text-base font-black text-remax-navy tracking-tight line-clamp-2 leading-snug group-hover:text-remax-red transition-colors">
            {property.title}
          </h3>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="text-xl font-black text-remax-navy tracking-tight">
                {formatMoney(property.price)}
              </div>
              {property.originalPrice && (
                <div className="text-xs font-bold text-slate-400 line-through">
                  De: {formatMoney(property.originalPrice)}
                </div>
              )}
            </div>

            <div className="text-right">
              <span className="text-xs font-black text-remax-red bg-remax-red/10 px-2.5 py-1 rounded-lg border border-remax-red/20">
                {formatMoney(property.pricePerM2)} / m²
              </span>
            </div>
          </div>

          {/* Property Specs Grid */}
          <div className="grid grid-cols-4 gap-2 my-3 py-2 bg-slate-50 rounded-2xl px-3 border border-slate-200/80">
            <div className="flex flex-col items-center justify-center text-center">
              <Maximize2 className="w-4 h-4 text-remax-red mb-0.5" />
              <span className="text-xs font-black text-remax-navy">{property.area}m²</span>
              <span className="text-[10px] font-medium text-slate-400">Área</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <BedDouble className="w-4 h-4 text-remax-navy mb-0.5" />
              <span className="text-xs font-black text-remax-navy">{property.suites}</span>
              <span className="text-[10px] font-medium text-slate-400">Suítes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Bath className="w-4 h-4 text-remax-navy mb-0.5" />
              <span className="text-xs font-black text-remax-navy">{property.bathrooms}</span>
              <span className="text-[10px] font-medium text-slate-400">Banhos</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Car className="w-4 h-4 text-remax-navy mb-0.5" />
              <span className="text-xs font-black text-remax-navy">{property.garages}</span>
              <span className="text-[10px] font-medium text-slate-400">Vagas</span>
            </div>
          </div>

          {/* External Listing Links Section */}
          {property.portalLinks && property.portalLinks.length > 0 && (
            <div className="mt-3">
              <div className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-wider">
                Anúncio Ativo no Portal:
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {property.portalLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-remax-red/10 text-[11px] font-black text-slate-700 hover:text-remax-red rounded-lg border border-slate-200 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Broker Operational Buttons Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            onClick={copyForClient}
            className={`w-full py-2.5 px-3 rounded-xl border text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
              copied
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copiado!" : "Copiar p/ Cliente"}</span>
          </button>

          <button
            onClick={() => onSelectProperty(property)}
            className="w-full py-2.5 px-3 bg-remax-navy hover:bg-slate-800 text-white text-xs font-black rounded-xl border border-remax-navy transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Ficha Completa</span>
          </button>
        </div>

      </div>

    </div>
  );
}
