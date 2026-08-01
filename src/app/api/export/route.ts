import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { BLUE_PROPERTIES } from "@/data/properties";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const condo = searchParams.get("condo") || "todos";

    // Filter properties
    const filteredProps = BLUE_PROPERTIES.filter((p) => {
      if (condo !== "todos" && p.condoSlug !== condo) return false;
      return true;
    });

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "RE/MAX VIP - Radar Litoral";
    workbook.lastModifiedBy = "Radar Litoral Engine";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet("Estoque de Imóveis VIP", {
      views: [{ showGridLines: true }],
    });

    // Title Row
    sheet.mergeCells("A1:J1");
    const titleCell = sheet.getCell("A1");
    titleCell.value = `RADAR LITORAL — RE/MAX VIP | RELATÓRIO DE ESTOQUE (${condo.toUpperCase()})`;
    titleCell.font = { name: "Inter Tight", size: 14, bold: true, color: { argb: "FFFFFFFF" } };
    titleCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0B1E3B" }, // RE/MAX Navy
    };
    titleCell.alignment = { vertical: "middle", horizontal: "center" };
    sheet.getRow(1).height = 40;

    // Subtitle Row
    sheet.mergeCells("A2:J2");
    const subCell = sheet.getCell("A2");
    subCell.value = `Gerado em ${new Date().toLocaleDateString("pt-BR")} — Total de ${filteredProps.length} Imóveis Mapeados`;
    subCell.font = { name: "Inter Tight", size: 10, italic: true, color: { argb: "FF475569" } };
    subCell.alignment = { vertical: "middle", horizontal: "center" };
    sheet.getRow(2).height = 20;

    // Header Row
    const headers = [
      "Código",
      "Condomínio",
      "Título / Descrição",
      "Valor (R$)",
      "Área (m²)",
      "Valor/m² (R$)",
      "Suítes",
      "Vagas",
      "Destaques",
      "Link Anúncio",
    ];

    const headerRow = sheet.addRow(headers);
    headerRow.height = 28;

    headerRow.eachCell((cell) => {
      cell.font = { name: "Inter Tight", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFE11C2A" }, // RE/MAX Red
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin", color: { argb: "FFCBD5E1" } },
        bottom: { style: "medium", color: { argb: "FF0B1E3B" } },
        left: { style: "thin", color: { argb: "FFCBD5E1" } },
        right: { style: "thin", color: { argb: "FFCBD5E1" } },
      };
    });

    // Data Rows
    filteredProps.forEach((prop, idx) => {
      const row = sheet.addRow([
        prop.code,
        prop.condoName,
        prop.title,
        prop.price,
        prop.area,
        prop.pricePerM2,
        prop.suites,
        prop.garages,
        `${prop.isLakefront ? "Beira Lago | " : ""}${prop.isFurnished ? "Mobiliada | " : ""}${prop.status === "preco_reduzido" ? "Preço Reduzido" : "Disponível"}`,
        prop.portalLinks[0]?.url || "N/A",
      ]);

      row.height = 24;

      const rowBg = idx % 2 === 0 ? "FFFFFFFF" : "FFF8FAFC";

      row.eachCell((cell, colNumber) => {
        cell.font = { name: "Inter Tight", size: 10, color: { argb: "FF0F172A" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: rowBg },
        };
        cell.border = {
          top: { style: "thin", color: { argb: "FFE2E8F0" } },
          bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
          left: { style: "thin", color: { argb: "FFE2E8F0" } },
          right: { style: "thin", color: { argb: "FFE2E8F0" } },
        };

        if (colNumber === 4 || colNumber === 6) {
          cell.numFmt = '"R$"#,##0';
          cell.alignment = { vertical: "middle", horizontal: "right" };
        } else if (colNumber === 5 || colNumber === 7 || colNumber === 8) {
          cell.alignment = { vertical: "middle", horizontal: "center" };
        } else {
          cell.alignment = { vertical: "middle", horizontal: "left" };
        }
      });
    });

    // Totals Row
    const totalRowIndex = filteredProps.length + 4;
    sheet.getRow(totalRowIndex).height = 26;

    const totalCell = sheet.getCell(`A${totalRowIndex}`);
    totalCell.value = "TOTAL / MÉDIA:";
    totalCell.font = { name: "Inter Tight", size: 11, bold: true, color: { argb: "FF0B1E3B" } };

    const avgPriceCell = sheet.getCell(`D${totalRowIndex}`);
    avgPriceCell.value = { formula: `AVERAGE(D4:D${totalRowIndex - 1})` };
    avgPriceCell.numFmt = '"R$"#,##0';
    avgPriceCell.font = { name: "Inter Tight", size: 11, bold: true, color: { argb: "FFE11C2A" } };

    const avgM2Cell = sheet.getCell(`F${totalRowIndex}`);
    avgM2Cell.value = { formula: `AVERAGE(F4:F${totalRowIndex - 1})` };
    avgM2Cell.numFmt = '"R$"#,##0';
    avgM2Cell.font = { name: "Inter Tight", size: 11, bold: true, color: { argb: "FFE11C2A" } };

    // Auto fit columns
    sheet.columns.forEach((col) => {
      col.width = 22;
    });
    sheet.getColumn(3).width = 45;
    sheet.getColumn(10).width = 40;

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename=radar-litoral-${condo}-${new Date().toISOString().split("T")[0]}.xlsx`,
      },
    });
  } catch (error: any) {
    console.error("Excel generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
