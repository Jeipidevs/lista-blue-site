"use client";

import Image from "next/image";
import { MessageCircle, PhoneCall, ShieldCheck, Home } from "lucide-react";

export default function Navbar() {
  const whatsappUrl = "https://wa.me/5551999999999?text=Ol%C3%A1!%20Vim%20pelo%20portal%20lista.integramob.com.br%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20casas%20no%20Condom%C3%ADnio%20Blue.";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-remax-red/25 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-remax-red/40 shadow-md transition-transform hover:scale-105">
              <Image
                src="/LOGO-REMAX.jpeg"
                alt="RE/MAX VIP Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-widest text-remax-red uppercase bg-remax-red/10 px-2 py-0.5 rounded-full border border-remax-red/20">
                  Portal Exclusivo VIP
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Mercado Atualizado
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-remax-navy tracking-tight leading-none mt-1">
                RE/MAX <span className="text-remax-red">VIP</span> <span className="font-light text-slate-400">|</span> <span className="font-extrabold text-slate-800">Condomínio Blue</span>
              </h1>
            </div>
          </div>

          {/* Center Info Badge (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-600 bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200">
            <div className="flex items-center gap-1.5">
              <Home className="w-4 h-4 text-remax-red" />
              <span>Condomínio Blue • Xangri-Lá / Capão</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-remax-navy" />
              <span>Atendimento Oficial RE/MAX VIP</span>
            </div>
          </div>

          {/* Contact Action */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-remax-red hover:bg-remax-red-hover text-white text-xs sm:text-sm font-black px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-red-glow transition-all transform hover:-translate-y-0.5 border border-remax-red"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span className="hidden sm:inline">Falar com Corretor VIP</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
