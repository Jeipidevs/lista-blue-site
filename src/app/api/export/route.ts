import { NextResponse } from "next/server";
import { BLUE_PROPERTIES } from "@/data/properties";
import * as XLSX from "xlsx";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const condo = searchParams.get("condo") || "todos";
  const format = searchParams.get("format") || "xlsx";

  const filtered = BLUE_PROPERTIES.filter((prop) => {
    if (condo !== "todos" && prop.condoSlug !== condo) return false;
    return true;
  });

  const exportData = filtered.map((prop) => ({
    "Código": prop.code,
    "Condomínio": prop.condoName,
    "Título": prop.title,
    "Valor (R$)": prop.price,
    "Área Privativa (m²)": prop.area,
    "Valor/m² (R$)": prop.pricePerM2,
    "Suítes": prop.suites,
    "Dormitórios": prop.bedrooms,
    "Banheiros": prop.bathrooms,
    "Vagas": prop.garages,
    "Beira Lago": prop.isLakefront ? "Sim" : "Não",
    "Mobiliado": prop.isFurnished ? "Sim" : "Não",
    "Status": prop.status === "preco_reduzido" ? "Preço Reduzido" : "Disponível",
    "Imobiliária / Portal": prop.portalLinks[0]?.name || "N/A",
    "Link do Anúncio": prop.portalLinks[0]?.url || "N/A",
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Imóveis Radar Litoral");

  if (format === "csv") {
    const csvBuffer = XLSX.write(workbook, { bookType: "csv", type: "buffer" });
    return new NextResponse(csvBuffer, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="Radar-Litoral-${condo}.csv"`,
      },
    });
  } else {
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    return new NextResponse(excelBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="Radar-Litoral-${condo}.xlsx"`,
      },
    });
  }
}
