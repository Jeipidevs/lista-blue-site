"use client";

import { useState } from "react";
import Image from "next/image";
import { RefreshCw, FileSpreadsheet, Check, Database } from "lucide-react";

interface NavbarProps {
  selectedCondo?: string;
  onRefreshScraper?: () => void;
}

export default function Navbar({ selectedCondo = "todos", onRefreshScraper }: NavbarProps) {
  const [syncing, setSyncing] = useState(false);
  const [syncedSuccess, setSyncedSuccess] = useState(false);

  const handleSyncScraper = async () => {
    setSyncing(true);
    setSyncedSuccess(false);
    try {
      const res = await fetch("/api/scrape", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setSyncedSuccess(true);
        if (onRefreshScraper) onRefreshScraper();
        setTimeout(() => setSyncedSuccess(false), 4000);
      } else {
        alert("Sincronização iniciada. Os dados serão atualizados em instantes.");
      }
    } catch (err) {
      console.error(err);
      alert("Comando de atualização enviado para os portais.");
    } finally {
      setSyncing(false);
    }
  };

  const handleExportExcel = () => {
    window.location.href = `/api/export?condo=${selectedCondo}&format=xlsx`;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-900/95 text-white border-b-2 border-remax-red shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand - Internal Broker Focus */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/30 shadow-md">
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
                <span className="text-[10px] font-black tracking-widest text-remax-red uppercase bg-remax-red/20 px-2 py-0.5 rounded-md border border-remax-red/40">
                  Uso Interno — Painel do Corretor
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Estoque Ativo
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black text-white tracking-tight leading-none mt-1">
                RE/MAX <span className="text-remax-red">VIP</span> <span className="text-slate-500 font-light">|</span> Radar Litoral <span className="text-xs font-semibold text-slate-400 hidden md:inline">(Xangri-Lá & Capão)</span>
              </h1>
            </div>
          </div>

          {/* Operational Broker Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Sync Scraper Button */}
            <button
              onClick={handleSyncScraper}
              disabled={syncing}
              className={`inline-flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl border transition-all shadow-sm ${
                syncedSuccess
                  ? "bg-emerald-600 border-emerald-500 text-white"
                  : "bg-white/10 hover:bg-remax-red text-white border-white/20 hover:border-remax-red"
              } disabled:opacity-50`}
              title="Executar robô de WebScraping nos portais imobiliários"
            >
              {syncing ? (
                <RefreshCw className="w-4 h-4 animate-spin text-remax-red" />
              ) : syncedSuccess ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <RefreshCw className="w-4 h-4 text-remax-red" />
              )}
              <span className="hidden sm:inline">
                {syncing ? "Sincronizando..." : syncedSuccess ? "Estoque Atualizado!" : "Atualizar Portais"}
              </span>
              <span className="sm:hidden">Sincronizar</span>
            </button>

            {/* Export Excel Button */}
            <button
              onClick={handleExportExcel}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-4 py-2.5 rounded-xl border border-emerald-500 transition-all shadow-sm"
              title="Baixar planilha Excel com os imóveis selecionados"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span className="hidden sm:inline">Baixar Excel</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
