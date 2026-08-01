"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { 
  X, 
  BedDouble, 
  Bath, 
  Car, 
  Maximize2, 
  ExternalLink, 
  History, 
  MessageCircle, 
  Sparkles, 
  Waves, 
  MapPin, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  TrendingDown
} from "lucide-react";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [property, onClose]);

  if (!property) return null;

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse na casa ${property.code} (${property.title}) de ${formatMoney(property.price)} no Condomínio Blue (lista.integramob.com.br). Gostaria de agendar uma visita!`
  );
  const whatsappUrl = `https://wa.me/5551999999999?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-remax-navy/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden border-2 border-remax-red shadow-2xl z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-remax-red/30">
          <div className="flex items-center gap-3">
            <span className="bg-remax-red text-white text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
              {property.code}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-300 hidden sm:inline">
              Condomínio Blue • Xangri-Lá / Capão da Canoa
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-remax-red text-white transition-colors"
            title="Fechar Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Main Gallery Section */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
              <Image
                src={property.images[activeImageIndex]}
                alt={property.title}
                fill
                className="object-cover transition-all duration-300"
                priority
              />

              {/* Navigation Arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-remax-red text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-remax-red text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Badge Counter */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-black px-3 py-1.5 rounded-lg border border-white/20">
                Foto {activeImageIndex + 1} de {property.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      idx === activeImageIndex
                        ? "border-remax-red scale-105 shadow-md"
                        : "border-slate-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Pricing Box */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl border border-remax-red/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-remax-navy text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  Exclusividade RE/MAX VIP
                </span>
                {property.isLakefront && (
                  <span className="bg-sky-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Waves className="w-3 h-3" /> Beira do Lago
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-remax-navy tracking-tight">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-remax-red" />
                <span>Condomínio Blue • Capão da Canoa / Xangri-Lá - RS</span>
              </div>
            </div>

            <div className="lg:text-right bg-white p-4 rounded-xl border border-remax-red/30 shadow-sm w-full lg:w-auto">
              <div className="text-2xl sm:text-3xl font-black text-remax-navy tracking-tight">
                {formatMoney(property.price)}
              </div>
              {property.originalPrice && (
                <div className="text-xs font-bold text-slate-400 line-through">
                  Valor Anterior: {formatMoney(property.originalPrice)}
                </div>
              )}
              <div className="text-xs font-bold text-remax-red mt-1">
                Valor por m²: {formatMoney(property.pricePerM2)} / m²
              </div>
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
              <div className="p-3 bg-remax-red/10 rounded-xl text-remax-red">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400">Área Privativa</div>
                <div className="text-base font-black text-remax-navy">{property.area} m²</div>
                <div className="text-[10px] text-slate-400">Terreno: {property.lotArea} m²</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
              <div className="p-3 bg-remax-navy/10 rounded-xl text-remax-navy">
                <BedDouble className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400">Suítes</div>
                <div className="text-base font-black text-remax-navy">{property.suites} Suítes</div>
                <div className="text-[10px] text-slate-400">{property.bedrooms} Dormitórios</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
              <div className="p-3 bg-remax-navy/10 rounded-xl text-remax-navy">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400">Banheiros</div>
                <div className="text-base font-black text-remax-navy">{property.bathrooms} Banhos</div>
                <div className="text-[10px] text-slate-400">Com Lavabo</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
              <div className="p-3 bg-remax-navy/10 rounded-xl text-remax-navy">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400">Vagas de Garagem</div>
                <div className="text-base font-black text-remax-navy">{property.garages} Vagas</div>
                <div className="text-[10px] text-slate-400">Cobertas</div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Description & Features List */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-black text-remax-navy mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-remax-red" />
                  Descrição do Imóvel
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-remax-navy mb-3">
                  Diferenciais & Atributos VIP
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs font-black text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Price History & Portals Links */}
            <div className="space-y-6">
              
              {/* Historical Tracker (Radar Litoral Feature) */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl border-2 border-remax-red/40 shadow-md">
                <div className="flex items-center gap-2 text-remax-red font-black text-xs uppercase tracking-wider mb-3">
                  <History className="w-4 h-4" />
                  <span>Histórico de Preços (Radar)</span>
                </div>
                <div className="space-y-2">
                  {property.priceHistory.map((hist, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-white/10 font-bold">
                      <span className="text-slate-400">{hist.date}</span>
                      <span className="text-white font-black">{formatMoney(hist.price)}</span>
                    </div>
                  ))}
                </div>
                {property.priceHistory.length > 1 && (
                  <div className="mt-3 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>Imóvel com histórico de valorização/ajuste.</span>
                  </div>
                )}
              </div>

              {/* External Portal Links */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-3">
                  Anúncios Originais nos Portais:
                </h4>
                <div className="space-y-2">
                  {property.portalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white hover:bg-remax-red/10 rounded-xl border border-slate-200 hover:border-remax-red/40 text-xs font-black text-remax-navy hover:text-remax-red transition-all group"
                    >
                      <span>Ver no {link.name}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-remax-red" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold text-slate-600">
            Código: <span className="font-black text-remax-navy">{property.code}</span> — Atendimento exclusivo RE/MAX VIP
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-700 font-black text-xs border border-slate-300 transition-colors w-full sm:w-auto"
            >
              Fechar Detalhes
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-remax-red hover:bg-remax-red-hover text-white font-black text-xs border border-remax-red transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-red-glow w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar Visita com Corretor VIP</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
