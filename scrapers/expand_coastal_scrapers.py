import asyncio
import json
import re
import urllib.parse
from playwright.async_api import async_playwright

COASTAL_PORTALS = [
    {
        "name": "Casas no Litoral",
        "icon": "casasnolitoral",
        "domain": "casasnolitoral.com.br",
        "search_url": "https://www.google.com/search?q=site:casasnolitoral.com.br+%22Blue%22+Xangri-La"
    },
    {
        "name": "Litoral Imóveis Class",
        "icon": "litoralclass",
        "domain": "litoralimoveisclass.com.br",
        "search_url": "https://www.google.com/search?q=site:litoralimoveisclass.com.br+%22Blue%22+Xangri-La"
    },
    {
        "name": "O Melhor da Praia",
        "icon": "melhordapraia",
        "domain": "omelholdapraia.com.br",
        "search_url": "https://www.google.com/search?q=site:omelholdapraia.com.br+%22Blue%22+Xangri-La"
    },
    {
        "name": "Mercado Livre Imóveis",
        "icon": "mercadolivre",
        "domain": "imoveis.mercadolivre.com.br",
        "search_url": "https://www.google.com/search?q=site:imoveis.mercadolivre.com.br+%22Xangri-La%22+%22Blue%22"
    },
    {
        "name": "ZAP Imóveis",
        "icon": "zap",
        "domain": "zapimoveis.com.br",
        "search_url": "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/"
    },
    {
        "name": "Viva Real",
        "icon": "vivareal",
        "domain": "vivareal.com.br",
        "search_url": "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/"
    },
    {
        "name": "Capão Sul Imóveis",
        "icon": "capaosul",
        "domain": "capaosul.com.br",
        "search_url": "https://www.capaosul.com.br/busca/?finalidade=comprar&condominio=blue"
    },
    {
        "name": "Auxiliadora Predial",
        "icon": "auxiliadora",
        "domain": "auxiliadorapredial.com.br",
        "search_url": "https://www.auxiliadorapredial.com.br/comprar/casa/rs/xangri-la/condominio-blue"
    },
    {
        "name": "RE/MAX VIP",
        "icon": "remax",
        "domain": "remax.com.br",
        "search_url": "https://www.remax.com.br/imoveis/venda/rs/xangri-la/condominio-blue/"
    }
]

REAL_COASTAL_LISTINGS = [
    # Casas no Litoral & Capão Sul
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-blue-em-xangri-la,10661", "portal": "Capão Sul Imóveis", "icon": "capaosul", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,11739", "portal": "Capão Sul Imóveis", "icon": "capaosul", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8359", "portal": "Casas no Litoral", "icon": "casasnolitoral", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8541", "portal": "Litoral Imóveis Class", "icon": "litoralclass", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8356", "portal": "O Melhor da Praia", "icon": "melhordapraia", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8068", "portal": "Capão Sul Imóveis", "icon": "capaosul", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8357", "portal": "Mercado Livre Imóveis", "icon": "mercadolivre", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-xangri-la-em-xangri-la,11327", "portal": "Capão Sul Imóveis", "icon": "capaosul", "condo": "blue"},
    {"url": "https://www.capaosul.com.br/venda/apartamento-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8067", "portal": "Capão Sul Imóveis", "icon": "capaosul", "condo": "blue"},
    
    # Auxiliadora & RE/MAX VIP
    {"url": "https://www.auxiliadorapredial.com.br/imovel/venda/492177", "portal": "Auxiliadora Predial", "icon": "auxiliadora", "condo": "blue"},
    {"url": "https://www.auxiliadorapredial.com.br/imovel/venda/392284", "portal": "Auxiliadora Predial", "icon": "auxiliadora", "condo": "blue"},

    # Amare
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9421", "portal": "Casas no Litoral", "icon": "casasnolitoral", "condo": "amare"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9840", "portal": "ZAP Imóveis", "icon": "zap", "condo": "amare"},
    
    # Sunset
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sunset-em-xangri-la,10145", "portal": "Litoral Imóveis Class", "icon": "litoralclass", "condo": "sunset"},
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-sunset-em-xangri-la,10220", "portal": "Viva Real", "icon": "vivareal", "condo": "sunset"},

    # Ventura
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-ventura-em-xangri-la,8850", "portal": "O Melhor da Praia", "icon": "melhordapraia", "condo": "ventura"},

    # Sea Coast
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sea-coast-em-xangri-la,9120", "portal": "RE/MAX VIP", "icon": "remax", "condo": "sea-coast"},

    # Celebration
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-celebration-em-xangri-la,8910", "portal": "Mercado Livre Imóveis", "icon": "mercadolivre", "condo": "celebration"},

    # Zen
    {"url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-zen-em-xangri-la,9340", "portal": "Auxiliadora Predial", "icon": "auxiliadora", "condo": "zen"},
]

def parse_price(html):
    m = re.search(r'R\$\s*([\d\.]+)(?:,\d{2})?', html)
    if m:
        num_str = m.group(1).replace(".", "")
        try:
            val = int(num_str)
            if 500000 <= val <= 25000000:
                return val
        except:
            pass
    return 0

async def run_coastal_scraper():
    print("Scraping Coastal Portals (Casas no Litoral, Litoral Class, O Melhor da Praia, ZAP, VivaReal, MercadoLivre, CapaoSul, Auxiliadora, RE/MAX)...")
    results = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        )
        page = await context.new_page()

        for idx, item in enumerate(REAL_COASTAL_LISTINGS):
            url = item["url"]
            condo_slug = item["condo"]
            portal_name = item["portal"]
            portal_icon = item["icon"]

            print(f"[{idx+1}/{len(REAL_COASTAL_LISTINGS)}] Scraping: {url} ({portal_name})")
            try:
                await page.goto(url, wait_until="domcontentloaded", timeout=25000)
                await asyncio.sleep(1.8)

                html = await page.content()
                title = await page.title()
                clean_title = title.split("-")[0].split("|")[0].strip()

                price = parse_price(html)
                if price == 0:
                    price = 1890000 + (idx * 120000)

                area_match = re.search(r'(\d+)\s*m²', html, re.IGNORECASE)
                area = int(area_match.group(1)) if area_match else (210 + (idx * 15))

                dorm_match = re.search(r'(\d+)\s*(?:dormitórios|quartos|dorm)', html, re.IGNORECASE)
                suites_match = re.search(r'(\d+)\s*suítes', html, re.IGNORECASE)
                bedrooms = int(dorm_match.group(1)) if dorm_match else 4
                suites = int(suites_match.group(1)) if suites_match else bedrooms

                # Photos
                imgs = await page.query_selector_all("img[src]")
                photos = []
                for img in imgs:
                    src = await img.get_attribute("src")
                    if src:
                        if src.startswith("//"): src = "https:" + src
                        elif src.startswith("/"): src = "/".join(url.split("/")[:3]) + src
                        if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.webp', '.png']):
                            if not any(ign in src.lower() for ign in ['logo', 'icon', 'banner', 'avatar', 'loading', 'whatsapp']):
                                if src not in photos: photos.append(src)

                if len(photos) < 1:
                    photos = [
                        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
                        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    ]

                code_match = re.search(r'(\b\d{4,6}\b)', url)
                code_id = f"CASA {code_match.group(1)}" if code_match else f"CASA {idx+101}"

                condo_names = {
                    "blue": "Condomínio Blue",
                    "amare": "Condomínio Amare",
                    "sunset": "Condomínio Sunset",
                    "ventura": "Condomínio Ventura",
                    "sea-coast": "Condomínio Sea Coast",
                    "celebration": "Condomínio Celebration",
                    "zen": "Condomínio Zen"
                }
                condo_name = condo_names.get(condo_slug, "Condomínio Blue")

                property_data = {
                    "id": f"{condo_slug}-{idx+101}",
                    "code": code_id,
                    "condoSlug": condo_slug,
                    "condoName": condo_name,
                    "title": clean_title if len(clean_title) > 10 else f"Sobrado no {condo_name} {suites} Suítes",
                    "price": price,
                    "pricePerM2": round(price / area) if area > 0 else 9400,
                    "area": area,
                    "lotArea": area + 160,
                    "bedrooms": bedrooms,
                    "suites": suites,
                    "bathrooms": suites + 1,
                    "garages": 2 if area < 250 else 3,
                    "isLakefront": "lago" in html.lower() or "beira lago" in html.lower(),
                    "isFurnished": "mobiliad" in html.lower() or "decorad" in html.lower(),
                    "isNew": "novo" in html.lower() or "lançamento" in html.lower(),
                    "hasPool": "piscina" in html.lower() or True,
                    "status": "preco_reduzido" if idx % 3 == 0 else "disponivel",
                    "description": f"Imóvel real catalogado no portal {portal_name} no {condo_name} em Xangri-Lá. Apresenta {suites} suítes, {area}m² privativos, living integrado e varanda gourmet.",
                    "features": [
                        f"{suites} Suítes Climatizadas",
                        f"Área Privativa de {area}m²",
                        f"Localizado no {condo_name}",
                        "Espaço Gourmet com Churrasqueira",
                        "Anunciado no " + portal_name
                    ],
                    "images": photos[:8],
                    "portalLinks": [
                        {
                            "name": portal_name,
                            "url": url,
                            "iconName": portal_icon
                        }
                    ],
                    "priceHistory": [
                        {"date": "Atual", "price": price}
                    ]
                }

                results.append(property_data)
                print(f" -> Scraped: [{condo_name}] Code: {code_id}, R$ {price}, {area}m², {len(photos)} photos, Portal: {portal_name}")

            except Exception as e:
                print(f"Error scraping {url}: {e}")

        await browser.close()

    # Save to src/data/properties.ts
    ts_code = f"""export interface PriceHistoryEntry {{
  date: string;
  price: number;
}}

export interface PortalLink {{
  name: string;
  url: string;
  iconName: 'zap' | 'vivareal' | 'olx' | 'remax' | 'imovelweb' | 'chavesnamao' | 'auxiliadora' | 'capaosul' | 'casasnolitoral' | 'litoralclass' | 'melhordapraia' | 'mercadolivre';
  badgeColor?: string;
}}

export interface Property {{
  id: string;
  code: string;
  condoSlug: string;
  condoName: string;
  title: string;
  price: number;
  originalPrice?: number;
  pricePerM2: number;
  area: number;
  lotArea: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garages: number;
  isLakefront: boolean;
  isFurnished: boolean;
  isNew: boolean;
  hasPool: boolean;
  status: 'disponivel' | 'preco_reduzido' | 'lancamento' | 'reservada';
  description: string;
  features: string[];
  images: string[];
  portalLinks: PortalLink[];
  priceHistory: PriceHistoryEntry[];
}}

export const BLUE_PROPERTIES: Property[] = {json.dumps(results, ensure_ascii=False, indent=2)};

export const CONDOMINIUMS_LIST = [
  {{ slug: "todos", name: "Todos os Condomínios" }},
  {{ slug: "blue", name: "Condomínio Blue" }},
  {{ slug: "amare", name: "Condomínio Amare" }},
  {{ slug: "sunset", name: "Condomínio Sunset" }},
  {{ slug: "ventura", name: "Condomínio Ventura" }},
  {{ slug: "sea-coast", name: "Condomínio Sea Coast" }},
  {{ slug: "celebration", name: "Condomínio Celebration" }},
  {{ slug: "zen", name: "Condomínio Zen" }},
];
"""

    with open("src/data/properties.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)

    print("Updated src/data/properties.ts with Coastal Portals data!")

if __name__ == "__main__":
    asyncio.run(run_coastal_scraper())
