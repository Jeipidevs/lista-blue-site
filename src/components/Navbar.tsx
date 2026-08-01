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
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden border border-white/30 shadow-md">
              <Image
                src="/LOGO-REMAX.jpeg"
                alt="RE/MAX VIP Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-lg font-black text-white tracking-tight leading-tight uppercase truncate sm:whitespace-normal">
                RE/MAX <span className="text-remax-red">VIP</span> RADAR LITORAL
              </h1>
            </div>
          </div>

          {/* Operational Broker Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Sync Scraper Button */}
            <button
              onClick={handleSyncScraper}
              disabled={syncing}
              className={`inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-black px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all shadow-sm ${
                syncedSuccess
                  ? "bg-emerald-600 border-emerald-500 text-white"
                  : "bg-white/10 hover:bg-remax-red text-white border-white/20 hover:border-remax-red"
              } disabled:opacity-50`}
              title="Executar robô de WebScraping nos portais imobiliários"
            >
              {syncing ? (
                <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-remax-red" />
              ) : syncedSuccess ? (
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              ) : (
                <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-remax-red" />
              )}
              <span className="hidden sm:inline">
                {syncing ? "Sincronizando..." : syncedSuccess ? "Estoque Atualizado!" : "Atualizar Portais"}
              </span>
              <span className="sm:hidden">Sincronizar</span>
            </button>

            {/* Export Excel Button */}
            <button
              onClick={handleExportExcel}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-black px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-emerald-500 transition-all shadow-sm"
              title="Baixar planilha Excel com os imóveis selecionados"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Baixar Excel</span>
              <span className="sm:hidden">Excel</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
