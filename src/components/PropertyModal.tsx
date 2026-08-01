"use client";

import { useState } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { 
  X, 
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
  CheckCircle,
  Copy,
  Check,
  FileText
} from "lucide-react";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const copyForClient = () => {
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

  const downloadPDF = () => {
    window.open(`/api/pdf?id=${property.id}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border-2 border-remax-red/40 shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-remax-red text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel */}
        <div className="relative aspect-[16/9] w-full bg-slate-900">
          {property.images[currentImgIndex] ? (
            <Image
              src={property.images[currentImgIndex]}
              alt={property.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-sm">
              Sem Foto
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
            <span className="bg-remax-navy text-white text-xs font-black px-3 py-1 rounded-xl shadow-md border border-white/20">
              {property.code}
            </span>
            <span className="bg-remax-red text-white text-xs font-black px-3 py-1 rounded-xl shadow-md">
              {property.condoName}
            </span>
          </div>

          {/* Arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-remax-navy flex items-center justify-center backdrop-blur-md transition-all shadow-md"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-remax-navy flex items-center justify-center backdrop-blur-md transition-all shadow-md"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </>
          )}

          {/* Counter */}
          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-xl border border-white/20">
            {currentImgIndex + 1} / {property.images.length}
          </span>
        </div>

        {/* Modal Details Section */}
        <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto space-y-6">
          
          {/* Title & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-remax-red" />
                <span>{property.condoName} — Xangri-Lá / Capão</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-remax-navy tracking-tight">
                {property.title}
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-black text-remax-navy tracking-tight">
                {formatMoney(property.price)}
              </div>
              <div className="text-xs font-bold text-remax-red mt-0.5">
                {formatMoney(property.pricePerM2)} / m²
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <div>
              <Maximize2 className="w-5 h-5 text-remax-red mx-auto mb-1" />
              <div className="text-sm font-black text-remax-navy">{property.area}m²</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Área</div>
            </div>
            <div>
              <BedDouble className="w-5 h-5 text-remax-navy mx-auto mb-1" />
              <div className="text-sm font-black text-remax-navy">{property.suites}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Suítes</div>
            </div>
            <div>
              <Bath className="w-5 h-5 text-remax-navy mx-auto mb-1" />
              <div className="text-sm font-black text-remax-navy">{property.bathrooms}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Banhos</div>
            </div>
            <div>
              <Car className="w-5 h-5 text-remax-navy mx-auto mb-1" />
              <div className="text-sm font-black text-remax-navy">{property.garages}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Vagas</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-black text-remax-navy uppercase tracking-wider mb-2">
              Descrição Técnica do Imóvel
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {property.description}
            </p>
          </div>

          {/* Broker Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {property.portalLinks[0] && (
                <a
                  href={property.portalLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black px-4 py-2.5 rounded-xl border border-slate-300 transition-all"
                >
                  <span>Ver no Portal {property.portalLinks[0].name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={downloadPDF}
                className="inline-flex items-center gap-1.5 bg-remax-navy hover:bg-slate-800 text-white text-xs font-black px-4 py-2.5 rounded-xl border border-remax-navy transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-remax-red" />
                <span>Gerar Ficha PDF (Gotenberg)</span>
              </button>

              <button
                onClick={copyForClient}
                className={`inline-flex items-center gap-1.5 text-xs font-black px-4 py-2.5 rounded-xl border transition-all ${
                  copied
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-remax-red hover:bg-remax-red-hover text-white border-remax-red"
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copiado!" : "Copiar p/ Cliente"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
