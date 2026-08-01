"use client";

import { useState } from "react";
import { Bot, Sparkles, Send, HelpCircle, Loader2 } from "lucide-react";

interface RadarAIModuleProps {
  selectedCondo: string;
}

export default function RadarAIModule({ selectedCondo }: RadarAIModuleProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const presetQuestions = [
    "Quais são as melhores oportunidades abaixo da média?",
    "Quais casas tiveram redução de preço recentemente?",
    "Compare os condomínios Blue x Amare x Sunset",
  ];

  const handleAsk = async (qText?: string) => {
    const q = qText || question;
    if (!q.trim()) return;

    setLoading(true);
    setAnswer(null);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, condo: selectedCondo }),
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Desculpe, ocorreu um erro ao consultar o Radar IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-6 sm:my-8 bg-gradient-to-br from-slate-900 via-remax-navy to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-remax-red/40 shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 sm:p-3 bg-remax-red/20 rounded-2xl border border-remax-red/40 text-remax-red shrink-0">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-remax-red bg-remax-red/10 px-2 py-0.5 rounded-full border border-remax-red/30">
                Radar IA — Módulo 7
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black tracking-tight text-white mt-0.5 sm:mt-1">
              Assistente de Inteligência Imobiliária
            </h2>
          </div>
        </div>

        <span className="text-xs font-bold text-slate-400">
          Análise instantânea de métricas e comparativos
        </span>
      </div>

      {/* Preset Questions Chips */}
      <div className="mb-4">
        <div className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-remax-red shrink-0" />
          <span>Perguntas Frequentes do Mercado:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {presetQuestions.map((pq, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuestion(pq);
                handleAsk(pq);
              }}
              className="text-xs font-bold bg-white/10 hover:bg-remax-red/20 text-slate-200 hover:text-white px-3 sm:px-3.5 py-2 rounded-xl border border-white/15 transition-all text-left"
            >
              {pq}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          placeholder="Faça uma pergunta sobre os imóveis, preços por m² ou comparativos..."
          className="w-full sm:flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-xs sm:text-sm font-bold text-white placeholder:text-slate-400 focus:outline-none focus:border-remax-red transition-all"
        />

        <button
          onClick={() => handleAsk()}
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3.5 bg-remax-red hover:bg-remax-red-hover text-white font-black text-xs sm:text-sm rounded-2xl border border-remax-red transition-all shadow-md flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          <span>Perguntar</span>
        </button>
      </div>

      {/* AI Answer Box */}
      {answer && (
        <div className="mt-6 p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-remax-red/30 animate-fade-in space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-remax-red uppercase tracking-wider">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Resposta do Radar IA</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-200 font-medium whitespace-pre-line leading-relaxed">
            {answer}
          </div>
        </div>
      )}
    </section>
  );
}
