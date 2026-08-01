import { NextResponse } from "next/server";
import { BLUE_PROPERTIES } from "@/data/properties";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = (body.question || "").toLowerCase();
    const condo = body.condo || "todos";

    const filtered = BLUE_PROPERTIES.filter((p) => {
      if (condo !== "todos" && p.condoSlug !== condo) return false;
      return true;
    });

    const formatMoney = (val: number) =>
      new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);

    let answer = "";
    let recommendedCodes: string[] = [];

    if (question.includes("oportunidades") || question.includes("melhores") || question.includes("abaixo da média")) {
      const avgPriceM2 = filtered.reduce((acc, p) => acc + p.pricePerM2, 0) / (filtered.length || 1);
      const belowAvg = filtered.filter((p) => p.pricePerM2 <= avgPriceM2 || p.status === "preco_reduzido");
      recommendedCodes = belowAvg.map((p) => p.code);

      answer = `Analisando os dados do mercado em tempo real:\n\nIdentificamos **${belowAvg.length} excelentes oportunidades** com valor por m² abaixo da média ou com redução de preço confirmada no mercado.\n\nPrincipais destaques:\n` +
        belowAvg.slice(0, 5).map((p) => `• **${p.code}** (${p.condoName}): ${formatMoney(p.price)} (${formatMoney(p.pricePerM2)}/m²) — ${p.suites} Suítes, ${p.area}m²`).join("\n");
    
    } else if (question.includes("compare") || question.includes("comparativo") || question.includes("diferença")) {
      const blueProps = BLUE_PROPERTIES.filter(p => p.condoSlug === "blue");
      const amareProps = BLUE_PROPERTIES.filter(p => p.condoSlug === "amare");
      const sunsetProps = BLUE_PROPERTIES.filter(p => p.condoSlug === "sunset");

      const blueAvg = blueProps.length ? Math.round(blueProps.reduce((a, b) => a + b.price, 0) / blueProps.length) : 0;
      const amareAvg = amareProps.length ? Math.round(amareProps.reduce((a, b) => a + b.price, 0) / amareProps.length) : 0;
      const sunsetAvg = sunsetProps.length ? Math.round(sunsetProps.reduce((a, b) => a + b.price, 0) / sunsetProps.length) : 0;

      answer = `📊 **Comparativo entre Condomínios (Radar Litoral)**:\n\n` +
        `• **Condomínio Blue**: Média de ${formatMoney(blueAvg)} | ${blueProps.length} ofertas ativas.\n` +
        `• **Condomínio Amare**: Média de ${formatMoney(amareAvg)} | ${amareProps.length} ofertas ativas.\n` +
        `• **Condomínio Sunset**: Média de ${formatMoney(sunsetAvg)} | ${sunsetProps.length} ofertas ativas.\n\n` +
        `*Conclusão*: O Condomínio Blue apresenta o maior número de opções com valorização consistente por m² e liquidez no litoral norte.`;

    } else if (question.includes("reduz") || question.includes("desconto") || question.includes("baixou")) {
      const drops = filtered.filter(p => p.status === "preco_reduzido" || p.originalPrice);
      recommendedCodes = drops.map(p => p.code);

      answer = `🔥 **Casas com Redução de Preço Registrada**:\n\n` +
        drops.map(p => `• **${p.code}** (${p.condoName}): De ${p.originalPrice ? formatMoney(p.originalPrice) : 'R$ Anterior'} por **${formatMoney(p.price)}** (Economia relevante no m²)`).join("\n");
    
    } else {
      answer = `Com base nas ${filtered.length} ofertas analisadas em Xangri-Lá e Capão da Canoa, o preço médio por m² nesta seleção é de ${formatMoney(Math.round(filtered.reduce((a, b) => a + b.pricePerM2, 0) / (filtered.length || 1)))}/m². Utilize os filtros por condomínio para refinar a busca!`;
      recommendedCodes = filtered.slice(0, 3).map(p => p.code);
    }

    return NextResponse.json({
      question,
      answer,
      recommendedCodes,
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar análise da IA" }, { status: 500 });
  }
}
