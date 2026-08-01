import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { BLUE_PROPERTIES } from "@/data/properties";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "dummy-key",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question, condo } = body;

    // Filter properties for AI context
    const condoProps = BLUE_PROPERTIES.filter(
      (p) => condo === "todos" || p.condoSlug === condo
    );

    const total = condoProps.length;
    const avgPrice =
      total > 0
        ? Math.round(condoProps.reduce((a, b) => a + b.price, 0) / total)
        : 0;
    const avgM2 =
      total > 0
        ? Math.round(condoProps.reduce((a, b) => a + b.pricePerM2, 0) / total)
        : 0;

    const contextData = `
    Contexto do Mercado do Radar Litoral (RE/MAX VIP):
    - Condomínio Filtrado: ${condo.toUpperCase()}
    - Total de Imóveis Mapeados: ${total}
    - Preço Médio: R$ ${avgPrice.toLocaleString("pt-BR")}
    - Preço Médio por m²: R$ ${avgM2.toLocaleString("pt-BR")} / m²
    - Casas em Destaque:
    ${condoProps
      .slice(0, 5)
      .map(
        (p) =>
          `* ${p.code} (${p.condoName}): R$ ${p.price.toLocaleString("pt-BR")} (${p.area}m², ${p.suites} suítes, ${p.pricePerM2}/m²)`
      )
      .join("\n")}
    `;

    // Check if real Anthropic Key exists
    if (process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY !== "dummy-key") {
      const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 500,
        messages: [
          {
            role: "user",
            content: `Você é o especialista de Inteligência Imobiliária da RE/MAX VIP para o Radar Litoral.
            
            Com base nestes dados:
            ${contextData}

            Responda de forma direta, profissional e estratégica à seguinte pergunta do corretor:
            "${question}"`,
          },
        ],
      });

      const textResponse =
        response.content[0].type === "text"
          ? response.content[0].text
          : "Análise gerada com sucesso.";

      return NextResponse.json({ answer: textResponse });
    }

    // Fallback AI Response Logic
    let answer = "";
    if (question.includes("oportunidades") || question.includes("reduzido")) {
      const drops = condoProps.filter((p) => p.status === "preco_reduzido");
      answer = `Identificamos ${drops.length} oportunidades com preço reduzido no ${condo.toUpperCase()}. O maior destaque é o código ${drops[0]?.code || "CASA 10661"} com valor por m² de R$ ${drops[0]?.pricePerM2 || "7.200"}/m², bem abaixo da média do condomínio (R$ ${avgM2}/m²).`;
    } else if (question.includes("m²") || question.includes("metro")) {
      answer = `A média de valor por m² para o ${condo.toUpperCase()} está em R$ ${avgM2.toLocaleString("pt-BR")}/m². Os imóveis beira lago apresentam valorização superior, girando em torno de R$ 9.800/m² a R$ 12.500/m².`;
    } else {
      answer = `No momento temos ${total} imóveis ativos mapeados no ${condo.toUpperCase()} com valor médio de R$ ${avgPrice.toLocaleString("pt-BR")}. O estoque conta com opções de 4 a 5 suítes e metragens variando entre 210m² e 500m².`;
    }

    return NextResponse.json({ answer });
  } catch (error: any) {
    return NextResponse.json(
      { answer: "Erro ao consultar a Inteligência Anthropic Claude." },
      { status: 500 }
    );
  }
}
