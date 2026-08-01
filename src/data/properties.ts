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
    description: "Espetacular residência em lote beira lago no Condomínio Blue. Totalmente mobiliada e decorada por arquiteto renomado. Possui 5 suítes independentes (sendo 1 máster com hidro e closet), living integrado em 3 ambientes com pé-direito duplo, lareira a lenha em pedra natural, cozinha gourmet completa com churrasqueira rotativa e chopeira. Amplo deck com piscina de concreto e borda infinita de frente para a água.",
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
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br", iconName: "zap" },
      { name: "Viva Real", url: "https://www.vivareal.com.br", iconName: "vivareal" },
      { name: "OLX", url: "https://www.olx.com.br", iconName: "olx" }
    ],
    priceHistory: [
      { date: "15/01/2026", price: 2950000 },
      { date: "20/03/2026", price: 2790000 },
      { date: "12/06/2026", price: 2650000 }
    ]
  },
  {
    id: "blue-108",
    code: "CASA 108",
    title: "Sobrado Neoclássico de Alto Padrão próximo ao Clube Social",
    price: 3450000,
    pricePerM2: 9857,
    area: 350,
    lotArea: 510,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "lancamento",
    description: "Projeto arquitetônico imponente e atemporal localizado em quadra nobre a poucos passos da infraestrutura de lazer do condomínio. Conta com 4 amplas suítes com sacada integradas ao paisagismo tropical. Salão principal aconchegante com lavabo, cozinha americana integrada com ilha em quartzo branco e varanda gourmet. Pátio privativo com piscina aquecida e fireplace.",
    features: [
      "Próximo ao Clube & Spa",
      "Piscina Aquecida com Jacuzzi",
      "Fireplace Externo Integrado",
      "Cozinha com Ilha em Quartzo",
      "Piso Aquecido nos Banheiros",
      "Suítes com Sacada Privativa",
      "Esquadrias com Persianas Automatizadas"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "Chaves na Mão", url: "https://www.chavesnamao.com.br", iconName: "chavesnamao" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br", iconName: "zap" }
    ],
    priceHistory: [
      { date: "01/05/2026", price: 3450000 }
    ]
  },
  {
    id: "blue-302",
    code: "CASA 302",
    title: "Residência Minimalista com Rooftop Gourmet e Elevador",
    price: 4890000,
    originalPrice: 5200000,
    pricePerM2: 10404,
    area: 470,
    lotArea: 550,
    bedrooms: 6,
    suites: 6,
    bathrooms: 8,
    garages: 4,
    isLakefront: true,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "preco_reduzido",
    description: "Uma verdadeira obra de arte minimalista. Casa com elevador em inox pneumático para 3 pavimentos, rooftop exclusivo de 100m² com vista panorâmica em 360º para a lagoa e a serra. 6 suítes (incluindo Suíte Master de 50m² com closet duplo). Adega climatizada para 200 rótulos, sauna seca e piscina em balanço revestida em pedra hijau natural.",
    features: [
      "Elevador Privativo 3 Níveis",
      "Rooftop Panorâmico com Bar",
      "Adega Climatizada para 200 Garrafas",
      "Piscina em Balanço Revestida em Hijau",
      "Sauna Seca com Acesso à Piscina",
      "Sistema de Som Amplificado Sonance",
      "Gerador de Energia Dedicado",
      "Lote Esquina Beira Lago"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "ImóvelWeb", url: "https://www.imovelweb.com.br", iconName: "imovelweb" },
      { name: "Viva Real", url: "https://www.vivareal.com.br", iconName: "vivareal" },
      { name: "Capão Sul", url: "https://www.capaosul.com.br", iconName: "capaosul" }
    ],
    priceHistory: [
      { date: "10/02/2026", price: 5200000 },
      { date: "18/05/2026", price: 4890000 }
    ]
  },
  {
    id: "blue-415",
    code: "CASA 415",
    title: "Casa Térrea Estilo Biofílico com Jardim Interno e Deck Solar",
    price: 2190000,
    pricePerM2: 8423,
    area: 260,
    lotArea: 450,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "disponivel",
    description: "Conforto e acessibilidade em uma belíssima planta térrea com design biofílico que integra a natureza em todos os ambientes. Possui jardim de inverno central com teto retrátil de vidro, 4 suítes bem distribuídas, living espaçoso com cozinha gourmet e ilha de marmoglass. Amplo pátio nos fundos com piscina e pergolado em madeira nobre.",
    features: [
      "Planta Térrea Totalmente Acessível",
      "Jardim Interno com Teto Retrátil",
      "Pergolado em Madeira Nobre Cumaru",
      "Painéis Solares Fotovoltaicos Instalados",
      "Mobiliário Assinado por Designers Nacionais",
      "Churrasqueira com Parrilla Argentina"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "OLX", url: "https://www.olx.com.br", iconName: "olx" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br", iconName: "zap" }
    ],
    priceHistory: [
      { date: "20/04/2026", price: 2190000 }
    ]
  },
  {
    id: "blue-520",
    code: "CASA 520",
    title: "Super Mansão Beira Lago de Esquina com Pista de Heliponto Próxima",
    price: 7800000,
    pricePerM2: 12580,
    area: 620,
    lotArea: 720,
    bedrooms: 6,
    suites: 6,
    bathrooms: 9,
    garages: 4,
    isLakefront: true,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "lancamento",
    description: "Uma das propriedades mais exclusivas do Condomínio Blue. Situada em lote duplo de esquina beira lago, com mais de 40 metros de testada para a água. Possui 6 suítes VIP com closet, cinema privativo equipado com Dolby Atmos, spa interno com sauna a vapor e hidromassagem aquecida para 10 pessoas. Cozinha profissional em inox e salão de festas privativo.",
    features: [
      "Lote Duplo de Esquina Beira Lago",
      "Cinema Privativo com 10 Poltronas Reclináveis",
      "Spa Interno Aquecido + Sauna a Vapor",
      "Piscina com Prainha e Pisoteto Aquecido",
      "Cozinha Industrial Secundária em Inox",
      "Automação Control4 Completa",
      "Suíte Máster de 75m² com Vista 180º"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "Viva Real", url: "https://www.vivareal.com.br", iconName: "vivareal" },
      { name: "ImóvelWeb", url: "https://www.imovelweb.com.br", iconName: "imovelweb" },
      { name: "Auxiliadora Predial", url: "https://www.auxiliadorapredial.com.br", iconName: "auxiliadora" }
    ],
    priceHistory: [
      { date: "01/06/2026", price: 7800000 }
    ]
  },
  {
    id: "blue-122",
    code: "CASA 122",
    title: "Sobrado com Fachada Ripada em Madeira Terreno Próximo à Portaria",
    price: 1980000,
    originalPrice: 2150000,
    pricePerM2: 7615,
    area: 260,
    lotArea: 420,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    garages: 2,
    isLakefront: false,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "preco_reduzido",
    description: "Excelente custo-benefício no Condomínio Blue. Casa com design arrojado apresentando ripas de madeira nobre na fachada e iluminação em fita LED. Conta com 4 suítes, living amplo integrado à cozinha com churrasqueira e pátio nos fundos com piscina de fibra e piso atérmico.",
    features: [
      "Fachada com Ripado em Madeira Nobre",
      "Excelente Custo por Metro Quadrado",
      "Piscina com Piso Atérmico",
      "Totalmente Mobiliada",
      "Lavabo com Cuba Esculpida em Granito"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "OLX", url: "https://www.olx.com.br", iconName: "olx" },
      { name: "Chaves na Mão", url: "https://www.chavesnamao.com.br", iconName: "chavesnamao" }
    ],
    priceHistory: [
      { date: "10/01/2026", price: 2150000 },
      { date: "15/04/2026", price: 1980000 }
    ]
  },
  {
    id: "blue-389",
    code: "CASA 389",
    title: "Sobrado Moderno com Suíte Master Térrea e Piscina com Prainha",
    price: 3100000,
    pricePerM2: 9117,
    area: 340,
    lotArea: 490,
    bedrooms: 5,
    suites: 5,
    bathrooms: 6,
    garages: 2,
    isLakefront: true,
    isFurnished: true,
    isNew: true,
    hasPool: true,
    status: "disponivel",
    description: "Residência seminova pronta para morar. Dispõe de 5 suítes completas (uma suíte térrea de fácil acesso), living com pé direito duplo e persianas automatizadas com controle remoto. Área gourmet completa com ilha em pedra preta São Gabriel escovada. Piscina com deck em porcelanato amadeirado de frente para o lago.",
    features: [
      "Suíte Térrea de Fácil Acesso",
      "Beira do Lago com Vista Aberta",
      "Piscina com Prainha e Deck Amadeirado",
      "Ilha Gourmet em Granito Escovado",
      "Climatização Split Inverter Instalada em Todos os Ambientes"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br", iconName: "zap" },
      { name: "Viva Real", url: "https://www.vivareal.com.br", iconName: "vivareal" }
    ],
    priceHistory: [
      { date: "10/03/2026", price: 3100000 }
    ]
  },
  {
    id: "blue-277",
    code: "CASA 277",
    title: "Sobrado com Garagem Subterrânea para 6 Carros e Espaço Fitness",
    price: 4250000,
    originalPrice: 4500000,
    pricePerM2: 10119,
    area: 420,
    lotArea: 530,
    bedrooms: 5,
    suites: 5,
    bathrooms: 7,
    garages: 6,
    isLakefront: true,
    isFurnished: true,
    isNew: false,
    hasPool: true,
    status: "preco_reduzido",
    description: "Projetada para quem valoriza espaço para veículos e privacidade. Possui subsolo privativo com capacidade para 6 carros cobertos, academia privativa equipada e adega. No andar principal, sala com iluminação arquitetônica, varanda com fechamento em Reiki, churrasqueira e piscina com cascata de teto.",
    features: [
      "Garagem Subterrânea Fechada para 6 Carros",
      "Espaço Fitness / Academia Privativa",
      "Cascata de Teto na Piscina",
      "Fechamento de Varanda em Pisoteto Reiki",
      "Lareira a Gás no Living",
      "Vista Direta para a Lagoa Principal"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    portalLinks: [
      { name: "RE/MAX VIP", url: "https://www.remax.com.br", iconName: "remax" },
      { name: "ImóvelWeb", url: "https://www.imovelweb.com.br", iconName: "imovelweb" },
      { name: "ZAP Imóveis", url: "https://www.zapimoveis.com.br", iconName: "zap" }
    ],
    priceHistory: [
      { date: "05/02/2026", price: 4500000 },
      { date: "22/05/2026", price: 4250000 }
    ]
  }
];

export const CONDO_METRICS = {
  totalHouses: 38,
  availableHouses: 8,
  avgPrice: 3801250,
  avgPricePerM2: 9610,
  maxPrice: 7800000,
  minPrice: 1980000,
  newAnnouncements: 3,
  priceDrops: 4,
  condoName: "Condomínio Blue",
  location: "Xangri-Lá & Capão da Canoa - RS",
  brokerage: "RE/MAX VIP I"
};
