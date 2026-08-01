"use client";

import { useState } from "react";
import { Download, FileSpreadsheet, Check } from "lucide-react";

interface ExcelExportButtonProps {
  selectedCondo: string;
}

export default function ExcelExportButton({ selectedCondo }: ExcelExportButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleExport = async (format: "xlsx" | "csv") => {
    setDownloading(true);
    try {
      const response = await fetch(`/api/export?condo=${selectedCondo}&format=${format}`);
      if (!response.ok) throw new Error("Erro na exportação");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Radar-Litoral-${selectedCondo}-${new Date().toISOString().slice(0, 10)}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar a planilha Excel.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleExport("xlsx")}
        disabled={downloading}
        className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-sm border border-emerald-600 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
      >
        <FileSpreadsheet className="w-4 h-4" />
        <span>{downloading ? "Gerando..." : "Exportar Excel (.xlsx)"}</span>
      </button>

      <button
        onClick={() => handleExport("csv")}
        disabled={downloading}
        className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black px-3 py-2.5 rounded-xl border border-slate-300 transition-colors disabled:opacity-50"
      >
        <Download className="w-3.5 h-3.5" />
        <span>CSV</span>
      </button>
    </div>
  );
}
