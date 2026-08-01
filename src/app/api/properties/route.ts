import { NextResponse } from "next/server";
import { BLUE_PROPERTIES } from "@/data/properties";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const condo = searchParams.get("condo") || "todos";
  const search = (searchParams.get("search") || "").toLowerCase();
  const suites = parseInt(searchParams.get("suites") || "0");
  const tag = searchParams.get("tag") || "todos";
  const sort = searchParams.get("sort") || "relevancia";

  let filtered = BLUE_PROPERTIES.filter((prop) => {
    // Condo Filter
    if (condo !== "todos" && prop.condoSlug !== condo) {
      return false;
    }

    // Search Term Filter
    if (search) {
      const matches =
        prop.title.toLowerCase().includes(search) ||
        prop.code.toLowerCase().includes(search) ||
        prop.condoName.toLowerCase().includes(search) ||
        prop.description.toLowerCase().includes(search) ||
        prop.features.some((f) => f.toLowerCase().includes(search));
      if (!matches) return false;
    }

    // Tag Filter
    if (tag === "beira_lago" && !prop.isLakefront) return false;
    if (tag === "preco_reduzido" && prop.status !== "preco_reduzido") return false;
    if (tag === "mobiliada" && !prop.isFurnished) return false;

    // Suites Filter
    if (suites > 0 && prop.suites < suites) return false;

    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (sort === "menor_preco") return a.price - b.price;
    if (sort === "maior_preco") return b.price - a.price;
    if (sort === "maior_area") return b.area - a.area;
    if (sort === "menor_m2") return a.pricePerM2 - b.pricePerM2;
    return 0;
  });

  return NextResponse.json({
    total: filtered.length,
    properties: filtered,
  });
}
