export interface PriceHistoryEntry {
  date: string;
  price: number;
}

export interface PortalLink {
  name: string;
  url: string;
  iconName: 'zap' | 'vivareal' | 'olx' | 'remax' | 'imovelweb' | 'chavesnamao' | 'auxiliadora' | 'capaosul';
  badgeColor?: string;
}

export interface Property {
  id: string;
  code: string;
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
}

export const BLUE_PROPERTIES: Property[] = [
  {
    id: "blue-102",
    code: "CASA 102",
    title: "Sobrado Moderno 4 Suítes com Living 2 Ambientes e Piscina no Blue",
    price: 1990000,
    pricePerM2: 9950,
    area: 200,
    lotArea: 360,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "disponivel",
    description: "Excelente sobrado de alto padrão no Condomínio Blue Xangri-Lá. Projeto moderno com 200m² de área construída, composto por 4 suítes independentes (sendo 1 térrea), amplo living em 2 ambientes com pé-direito duplo, lavabo, cozinha americana integrada com espaço gourmet e churrasqueira. Pátio privativo nos fundos com piscina de concreto e paisagismo completo.",
    features: [
      "Suíte Térrea de Fácil Acesso",
      "Living com Pé-Direito Duplo",
      "Espaço Gourmet com Churrasqueira",
      "Piscina Privativa com Deck",
      "Cozinha Americana Integrada",
      "Esquadrias em Alumínio Preto",
      "Mobiliado e Decorado Pronto para Morar"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "Auxiliadora Predial", url: "https://www.auxiliadorapredial.com.br/comprar/casa/xangri-la/condominio-blue/", iconName: "auxiliadora" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" },
      { name: "Capão Sul Imóveis", url: "https://www.capaosul.com.br/comprar/rs/xangri-la/condominio-blue/", iconName: "capaosul" }
    ],
    priceHistory: [
      { date: "10/04/2026", price: 1990000 }
    ]
  },
  {
    id: "blue-214",
    code: "CASA 214",
    title: "Mansão Contemporânea Beira do Lago com Pisoteto e Automação",
    price: 2650000,
    originalPrice: 2950000,
    pricePerM2: 8281,
    area: 320,
    lotArea: 480,
    bedrooms: 5,
    suites: 5,
    bathrooms: 6,
    garages: 3,
    isLakefront: true,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "preco_reduzido",
    description: "Espetacular residência em lote beira lago no Condomínio Blue Xangri-Lá. Totalmente mobiliada e decorada por arquiteto renomado. Possui 5 suítes independentes (sendo 1 máster com hidro e closet), living integrado em 3 ambientes com pé-direito duplo, lareira a lenha em pedra natural, cozinha gourmet completa com churrasqueira rotativa e chopeira. Amplo deck com piscina de concreto e borda infinita de frente para a água.",
    features: [
      "Beira de Lago Principal",
      "Mobiliada & Decorada",
      "Piscina com Borda Infinita",
      "Espaço Gourmet com Chopeira",
      "Lareira em Pedra Natural",
      "Automação de Iluminação",
      "Esquadrias em Alumínio Preto Pisoteto",
      "Suíte Térrea",
      "Abrigo para 3 Veículos"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br/imoveis/venda/rs/xangri-la/condominio-blue/", iconName: "remax" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" },
      { name: "OLX", url: "https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-litoral-norte/imoveis/venda/casas/condominio-blue-xangri-la", iconName: "olx" }
    ],
    priceHistory: [
      { date: "15/01/2026", price: 2950000 },
      { date: "20/03/2026", price: 2790000 },
      { date: "12/06/2026", price: 2650000 }
    ]
  },
  {
    id: "blue-308",
    code: "CASA 308",
    title: "Sobrado Mobiliado e Decorado 4 Suítes com Varanda Gourmet",
    price: 2450000,
    pricePerM2: 9800,
    area: 250,
    lotArea: 400,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "disponivel",
    description: "Residência pronta para morar em localização privilegiada no Condomínio Blue Xangri-Lá. São 250m² de área construída divididos em 4 amplas suítes com sacada privativa, living integrado com lareira ecológica a álcool, lavabo finamente decorado, espaço gourmet com bancada em granito escovado e pátio privativo com piscina aquecida.",
    features: [
      "4 Suítes com Sacadas Privativas",
      "Piscina Aquecida no Pátio",
      "Lareira Ecológica no Living",
      "Bancada Gourmet em Granito Escovado",
      "Climatizado em Todos os Cômodos",
      "Mobiliário de Alto Padrão",
      "Próximo à Infraestrutura do Condomínio"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Auxiliadora Predial", url: "https://www.auxiliadorapredial.com.br/comprar/casa/xangri-la/condominio-blue/", iconName: "auxiliadora" },
      { name: "Chaves na Mão", url: "https://www.chavesnamao.com.br/casas-a-venda/rs-xangri-la/condominio-blue/", iconName: "chavesnamao" }
    ],
    priceHistory: [
      { date: "05/03/2026", price: 2450000 }
    ]
  },
  {
    id: "blue-405",
    code: "CASA 405",
    title: "Residência Neoclássica 5 Suítes Beira Lago com Suíte Master Térrea",
    price: 3200000,
    pricePerM2: 9411,
    area: 340,
    lotArea: 500,
    bedrooms: 5,
    suites: 5,
    bathrooms: 6,
    garages: 3,
    isLakefront: true,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "lancamento",
    description: "Projeto arquitetônico neoclássico de tirar o fôlego. Imóvel de esquina de frente para a lagoa com 340m² privativos, 5 suítes (suíte térrea de fácil acessibilidade), living em 3 ambientes com pé-direito duplo de 6 metros, lareira imponente em marmo quartezito, adega climatizada, espaço gourmet com chopeira de 2 bicos e deck com piscina em balanço.",
    features: [
      "Projeto Neoclássico Exclusivo",
      "Beira do Lago Principal",
      "Pé-Direito Duplo de 6 Metros",
      "Adega Climatizada para 150 Garrafas",
      "Espaço Gourmet com Chopeira Dupla",
      "Piscina com Deck em Balanço",
      "Abrigo Coberto para 3 Carros"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br/imoveis/venda/rs/xangri-la/condominio-blue/", iconName: "remax" },
      { name: "ImóvelWeb", url: "https://www.imovelweb.com.br/casas-venda-condominio-blue-xangri-la.html", iconName: "imovelweb" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Capão Sul Imóveis", url: "https://www.capaosul.com.br/comprar/rs/xangri-la/condominio-blue/", iconName: "capaosul" }
    ],
    priceHistory: [
      { date: "12/05/2026", price: 3200000 }
    ]
  },
  {
    id: "blue-118",
    code: "CASA 118",
    title: "Casa Térrea Estilo Biofílico com Pergolado Cumaru e Fireplace",
    price: 1850000,
    pricePerM2: 8809,
    area: 210,
    lotArea: 380,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "disponivel",
    description: "Para quem busca a praticidade e a acessibilidade de uma planta térrea sem abrir mão do luxo. Imóvel com 210m², 4 suítes bem distribuídas, jardim de inverno interno com claraboia em vidro solar, living integrado com cozinha gourmet e churrasqueira. Amplo pátio nos fundos com pergolado em madeira Cumaru e fireplace externo.",
    features: [
      "Planta Térrea Totalmente Acessível",
      "Jardim de Inverno com Claraboia",
      "Pergolado em Madeira Cumaru",
      "Fireplace Externo para Noites de Inverno",
      "Churrasqueira com Parrilla Argentina",
      "Totalmente Climatizada e Mobiliada"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "Auxiliadora Predial", url: "https://www.auxiliadorapredial.com.br/comprar/casa/xangri-la/condominio-blue/", iconName: "auxiliadora" },
      { name: "OLX", url: "https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-litoral-norte/imoveis/venda/casas/condominio-blue-xangri-la", iconName: "olx" },
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" }
    ],
    priceHistory: [
      { date: "20/02/2026", price: 1850000 }
    ]
  },
  {
    id: "blue-502",
    code: "CASA 502",
    title: "Super Mansão Beira Lago 6 Suítes com Elevador e Rooftop 360º",
    price: 5800000,
    pricePerM2: 11153,
    area: 520,
    lotArea: 650,
    bedrooms: 6,
    suites: 6,
    bathrooms: 8,
    garages: 4,
    isLakefront: true,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "lancamento",
    description: "Uma das maiores e mais luxuosas propriedades do Condomínio Blue Xangri-Lá. Residência de alto luxo com elevador de acesso a 3 pavimentos, 6 suítes VIP (Suíte Máster com 60m², closet duplo e sala de banho com vista panorâmica). Rooftop privativo com jacuzzi e bar de apoio. Cinema privativo, spa com sauna a vapor e piscina aquecida revestida em pedra hijau.",
    features: [
      "Elevador Privativo Inox 3 Pavimentos",
      "Rooftop Panorâmico 360º com Bar",
      "Spa com Sauna a Vapor + Jacuzzi",
      "Cinema Privativo Equipado",
      "Piscina Aquecida Revestida em Hijau",
      "Lote Duplo Beira do Lago",
      "Automação de Áudio e Iluminação Control4"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br/imoveis/venda/rs/xangri-la/condominio-blue/", iconName: "remax" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" },
      { name: "ImóvelWeb", url: "https://www.imovelweb.com.br/casas-venda-condominio-blue-xangri-la.html", iconName: "imovelweb" }
    ],
    priceHistory: [
      { date: "01/06/2026", price: 5800000 }
    ]
  },
  {
    id: "blue-230",
    code: "CASA 230",
    title: "Sobrado Contemporâneo Beira Lago com Automação e Chopeira",
    price: 2890000,
    pricePerM2: 9965,
    area: 290,
    lotArea: 450,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: true,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "disponivel",
    description: "Excelente sobrado beira lago totalmente equipado e decorado. Possui 290m², 4 suítes completas, salão social integrado com esquadrias pisoteto reiki de abertura total para a lagoa. Espaço gourmet climatizado com churrasqueira em inox, chopeira de bancada, cervejeira dual zone e piscina com deck molhado.",
    features: [
      "Beira do Lago de Frente para a Água",
      "Pisoteto Reiki com Abertura Total",
      "Espaço Gourmet com Chopeira e Cervejeira",
      "Piscina com Deck Molhado",
      "Painéis Solares Fotovoltaicos",
      "Garagem Coberta para 2 Veículos"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "Capão Sul Imóveis", url: "https://www.capaosul.com.br/comprar/rs/xangri-la/condominio-blue/", iconName: "capaosul" },
      { name: "Auxiliadora Predial", url: "https://www.auxiliadorapredial.com.br/comprar/casa/xangri-la/condominio-blue/", iconName: "auxiliadora" },
      { name: "Viva Real", url: "https://www.vivareal.com.br/venda/rs/xangri-la/condominio-blue-xangri-la/", iconName: "vivareal" }
    ],
    priceHistory: [
      { date: "15/03/2026", price: 2890000 }
    ]
  },
  {
    id: "blue-145",
    code: "CASA 145",
    title: "Sobrado Minimalista com Pisoteto e Lareira Ecológica",
    price: 2150000,
    originalPrice: 2300000,
    pricePerM2: 9347,
    area: 230,
    lotArea: 375,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "preco_reduzido",
    description: "Design minimalista e elegante em quadra nobre do Blue Xangri-Lá. Sobrado com 230m², 4 suítes (1 suíte térrea), lavabo com acabamento em granito nero marquina, sala de estar com lareira ecológica a álcool e cozinha gourmet com churrasqueira. Pátio nos fundos com piscina de fibra e piso atérmico.",
    features: [
      "Preço Reduzido — Oportunidade VIP",
      "Arquitetura Minimalista",
      "Suíte Térrea Privativa",
      "Lareira Ecológica no Living",
      "Piscina com Piso Atérmico",
      "Mobiliado e Decorado"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br/venda/casas/rs+xangri-la/condominio-blue-xangri-la/", iconName: "zap" },
      { name: "Chaves na Mão", url: "https://www.chavesnamao.com.br/casas-a-venda/rs-xangri-la/condominio-blue/", iconName: "chavesnamao" },
      { name: "OLX", url: "https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-litoral-norte/imoveis/venda/casas/condominio-blue-xangri-la", iconName: "olx" }
    ],
    priceHistory: [
      { date: "10/01/2026", price: 2300000 },
      { date: "25/05/2026", price: 2150000 }
    ]
  }
];

export const CONDO_METRICS = {
  totalHouses: 38,
  availableHouses: 8,
  avgPrice: 2872500,
  avgPricePerM2: 9592,
  maxPrice: 5800000,
  minPrice: 1850000,
  newAnnouncements: 3,
  priceDrops: 3,
  condoName: "Condomínio Blue",
  location: "Xangri-Lá & Capão da Canoa - RS",
  brokerage: "RE/MAX VIP I"
};
