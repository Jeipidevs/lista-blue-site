"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-remax-navy text-white border-t-4 border-remax-red mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Operational Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 shadow-md">
                <Image
                  src="/LOGO-REMAX.jpeg"
                  alt="RE/MAX VIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-white">
                  Radar Litoral <span className="text-remax-red font-light">|</span> RE/MAX VIP
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Terminal Interno de Inteligência Imobiliária
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium max-w-md">
              Plataforma comercial de uso interno para corretores. Monitoramento e consolidação de ofertas, variações de preço por m² e histórico de anúncios nos condomínios de luxo: 
              <strong> Blue, Amare, Sunset, Ventura, Sea Coast, Celebration e Zen</strong> em Xangri-Lá e Capão da Canoa.
            </p>

            <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>EasyPanel VPS — Domínio Oficial: <strong className="text-white">lista.integramob.com.br</strong></span>
            </div>
          </div>

          {/* Col 2: Coastal Portals Covered */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-remax-red">
              Portais Monitorados
            </h4>
            <ul className="space-y-1.5 text-xs font-bold text-slate-300">
              <li className="text-slate-400">Casas no Litoral • Litoral Class</li>
              <li className="text-slate-400">O Melhor da Praia • Capão Sul</li>
              <li className="text-slate-400">ZAP Imóveis • Viva Real</li>
              <li className="text-slate-400">Mercado Livre • Auxiliadora Predial</li>
              <li>
                <a href="https://www.remax.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-remax-red transition-colors inline-flex items-center gap-1 text-white">
                  RE/MAX Brasil <ExternalLink className="w-3 h-3 text-remax-red" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-remax-red">
              Suporte do Corretor VIP
            </h4>
            <div className="space-y-2 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-remax-red flex-shrink-0 mt-0.5" />
                <span>Atuação em Xangri-Lá e Capão da Canoa - RS</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-remax-red flex-shrink-0" />
                <span>(51) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-remax-red flex-shrink-0" />
                <span>vip@remax.com.br</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-slate-500 font-bold flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Radar Litoral — RE/MAX VIP I. Todos os direitos reservados.</p>
          <p className="text-[11px]">Uso Interno Exclusivo • lista.integramob.com.br</p>
        </div>
      </div>
    </footer>
  );
}
