"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-remax-navy text-white border-t-4 border-remax-red mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Logo */}
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
                  RE/MAX <span className="text-remax-red">VIP</span>
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Condomínio Blue — Portal Exclusivo
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium max-w-md">
              Portal oficial de inteligência imobiliária para o Condomínio Blue em Xangri-Lá / Capão da Canoa. 
              Acompanhamento diário de preços, disponibilidades e anúncios consolidados das melhores imobiliárias do litoral.
            </p>

            <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hospedado em EasyPanel VPS — Domínio Oficial: <strong className="text-white">lista.integramob.com.br</strong></span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-remax-red">
              Portais Parceiros
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-300">
              <li>
                <a href="https://www.remax.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-remax-red transition-colors inline-flex items-center gap-1">
                  RE/MAX Brasil <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.zapimoveis.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-remax-red transition-colors inline-flex items-center gap-1">
                  ZAP Imóveis <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.vivareal.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-remax-red transition-colors inline-flex items-center gap-1">
                  Viva Real <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.olx.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-remax-red transition-colors inline-flex items-center gap-1">
                  OLX Imóveis <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-remax-red">
              Atendimento VIP
            </h4>
            <div className="space-y-2 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-remax-red flex-shrink-0 mt-0.5" />
                <span>Condomínio Blue, Capão da Canoa / Xangri-Lá - RS</span>
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
          <p>© {new Date().getFullYear()} RE/MAX VIP I — Todos os direitos reservados.</p>
          <p className="text-[11px]">Desenvolvido com Next.js & Tailwind CSS • lista.integramob.com.br</p>
        </div>
      </div>
    </footer>
  );
}
