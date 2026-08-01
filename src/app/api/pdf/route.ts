import { NextRequest, NextResponse } from "next/server";
import { BLUE_PROPERTIES } from "@/data/properties";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const property = BLUE_PROPERTIES.find((p) => p.id === id) || BLUE_PROPERTIES[0];

    const formatMoney = (val: number) => {
      return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);
    };

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 40px; color: #0f172a; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #e11c2a; padding-bottom: 20px; margin-bottom: 30px; }
          .logo-title { font-size: 24px; font-weight: 900; color: #0b1e3b; text-transform: uppercase; }
          .badge { background: #e11c2a; color: white; padding: 6px 12px; font-weight: 800; border-radius: 6px; font-size: 12px; }
          .title { font-size: 26px; font-weight: 900; color: #0b1e3b; margin-bottom: 10px; }
          .price { font-size: 32px; font-weight: 900; color: #e11c2a; margin-bottom: 20px; }
          .specs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e2e8f0; }
          .spec-item { text-align: center; }
          .spec-val { font-size: 18px; font-weight: 900; color: #0b1e3b; }
          .spec-lbl { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
          .gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 30px; }
          .gallery img { width: 100%; height: 200px; object-fit: cover; border-radius: 12px; border: 1px solid #e2e8f0; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 40px; display: flex; justify-content: space-between; font-size: 12px; color: #64748b; font-weight: 700; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo-title">RE/MAX <span style="color:#e11c2a">VIP</span> | Radar Litoral</div>
          <div class="badge">${property.code} — FICHA TÉCNICA</div>
        </div>

        <div class="title">${property.title}</div>
        <div class="price">${formatMoney(property.price)} <span style="font-size:16px; color:#64748b; font-weight:normal">(${formatMoney(property.pricePerM2)} / m²)</span></div>

        <div class="specs-grid">
          <div class="spec-item">
            <div class="spec-val">${property.area} m²</div>
            <div class="spec-lbl">Área Privativa</div>
          </div>
          <div class="spec-item">
            <div class="spec-val">${property.suites}</div>
            <div class="spec-lbl">Suítes</div>
          </div>
          <div class="spec-item">
            <div class="spec-val">${property.bathrooms}</div>
            <div class="spec-lbl">Banheiros</div>
          </div>
          <div class="spec-item">
            <div class="spec-val">${property.garages}</div>
            <div class="spec-lbl">Vagas</div>
          </div>
        </div>

        <div class="gallery">
          ${property.images.slice(0, 4).map((img) => `<img src="${img}" alt="" />`).join("")}
        </div>

        <div style="background:#f1f5f9; padding:20px; border-radius:12px; font-size:13px; line-height:1.6; margin-bottom:30px;">
          <strong>Descrição Técnica:</strong><br />
          ${property.description}
        </div>

        <div class="footer">
          <div>RE/MAX VIP — Atendimento Exclusivo para Corretores</div>
          <div>lista.integramob.com.br</div>
        </div>
      </body>
      </html>
    `;

    const gotenbergUrl = process.env.GOTENBERG_URL || "http://localhost:3000";

    try {
      const formData = new FormData();
      formData.append("files", new Blob([html], { type: "text/html" }), "index.html");

      const response = await fetch(`${gotenbergUrl}/forms/chromium/convert/html`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const pdfBuffer = await response.arrayBuffer();
        return new NextResponse(pdfBuffer, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename=ficha-${property.code}.pdf`,
          },
        });
      }
    } catch (e) {
      console.warn("Gotenberg service not reached directly, returning clean HTML print version:", e);
    }

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
