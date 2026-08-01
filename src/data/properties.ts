export interface PriceHistoryEntry {
  date: string;
  price: number;
}

export interface PortalLink {
  name: string;
  url: string;
  iconName: 'zap' | 'vivareal' | 'olx' | 'remax' | 'imovelweb' | 'chavesnamao' | 'auxiliadora' | 'capaosul' | 'casasnolitoral' | 'litoralclass' | 'melhordapraia' | 'mercadolivre';
  badgeColor?: string;
}

export interface Property {
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
}

export const BLUE_PROPERTIES: Property[] = [
  {
    "id": "blue-101",
    "code": "CASA 10661",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 5 dormitórios para venda, Cond. Blue em Xangri",
    "price": 2000000,
    "pricePerM2": 5038,
    "area": 397,
    "lotArea": 557,
    "bedrooms": 5,
    "suites": 5,
    "bathrooms": 6,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal Capão Sul Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 5 suítes, 397m² privativos, living integrado e varanda gourmet.",
    "features": [
      "5 Suítes Climatizadas",
      "Área Privativa de 397m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Capão Sul Imóveis"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/10661/c0a13ce2caafec7f1f875f3d84670803.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Capão Sul Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-blue-em-xangri-la,10661",
        "iconName": "capaosul"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 2000000
      }
    ]
  },
  {
    "id": "blue-102",
    "code": "CASA 11739",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 1480000,
    "pricePerM2": 6981,
    "area": 212,
    "lotArea": 372,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Capão Sul Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 212m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 212m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Capão Sul Imóveis"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/11739/3c60a9af01d1c9e83ad7a43248bb4f14.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Capão Sul Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,11739",
        "iconName": "capaosul"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1480000
      }
    ]
  },
  {
    "id": "blue-103",
    "code": "CASA 8359",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 1890000,
    "pricePerM2": 12600,
    "area": 150,
    "lotArea": 310,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Casas no Litoral no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 150m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 150m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Casas no Litoral"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/8359/1487fe8f60a01ac4e941edc0433733ed.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Casas no Litoral",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8359",
        "iconName": "casasnolitoral"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1890000
      }
    ]
  },
  {
    "id": "blue-104",
    "code": "CASA 8541",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 1800000,
    "pricePerM2": 8491,
    "area": 212,
    "lotArea": 372,
    "bedrooms": 4,
    "suites": 6,
    "bathrooms": 7,
    "garages": 2,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal Litoral Imóveis Class no Condomínio Blue em Xangri-Lá. Apresenta 6 suítes, 212m² privativos, living integrado e varanda gourmet.",
    "features": [
      "6 Suítes Climatizadas",
      "Área Privativa de 212m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Litoral Imóveis Class"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/8541/f1a3909db5da8b33c8fa4dcb28e37dad.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Litoral Imóveis Class",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8541",
        "iconName": "litoralclass"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1800000
      }
    ]
  },
  {
    "id": "blue-105",
    "code": "CASA 8356",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 1990000,
    "pricePerM2": 9387,
    "area": 212,
    "lotArea": 372,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal O Melhor da Praia no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 212m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 212m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no O Melhor da Praia"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/8356/ea25cc2c1bc485edd56f3d6c3e4b1991.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "O Melhor da Praia",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8356",
        "iconName": "melhordapraia"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1990000
      }
    ]
  },
  {
    "id": "blue-106",
    "code": "CASA 8068",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Capão Sul Imóveis",
    "price": 1300000,
    "pricePerM2": 4561,
    "area": 285,
    "lotArea": 445,
    "bedrooms": 1,
    "suites": 1,
    "bathrooms": 2,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Capão Sul Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 1 suítes, 285m² privativos, living integrado e varanda gourmet.",
    "features": [
      "1 Suítes Climatizadas",
      "Área Privativa de 285m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Capão Sul Imóveis"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "Capão Sul Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8068",
        "iconName": "capaosul"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1300000
      }
    ]
  },
  {
    "id": "blue-107",
    "code": "CASA 8357",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 1690000,
    "pricePerM2": 7972,
    "area": 212,
    "lotArea": 372,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal Mercado Livre Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 212m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 212m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Mercado Livre Imóveis"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/8357/551442972471825dac4142e44e84a6bd.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Mercado Livre Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8357",
        "iconName": "mercadolivre"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1690000
      }
    ]
  },
  {
    "id": "blue-108",
    "code": "CASA 11327",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio 5 dormitórios para venda, Xangri",
    "price": 6300000,
    "pricePerM2": 15869,
    "area": 397,
    "lotArea": 557,
    "bedrooms": 5,
    "suites": 5,
    "bathrooms": 6,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Capão Sul Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 5 suítes, 397m² privativos, living integrado e varanda gourmet.",
    "features": [
      "5 Suítes Climatizadas",
      "Área Privativa de 397m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Capão Sul Imóveis"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/11327/ff1dd68dbba1fbac5e421e777d39560a.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Capão Sul Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-xangri-la-em-xangri-la,11327",
        "iconName": "capaosul"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 6300000
      }
    ]
  },
  {
    "id": "blue-109",
    "code": "CASA 8067",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Apartamento 4 dormitórios para venda, Cond. Blue em Xangri",
    "price": 2180000,
    "pricePerM2": 13374,
    "area": 163,
    "lotArea": 323,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": false,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Capão Sul Imóveis no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 163m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 163m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Capão Sul Imóveis"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/8067/da4dbf246ebf18c39338f8e0ddcc1a47.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Capão Sul Imóveis",
        "url": "https://www.capaosul.com.br/venda/apartamento-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8067",
        "iconName": "capaosul"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 2180000
      }
    ]
  },
  {
    "id": "blue-110",
    "code": "CASA 492177",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio com 4 quartos e 150m² à venda em Condomínio Blue, Xangri",
    "price": 2160000,
    "pricePerM2": 14400,
    "area": 150,
    "lotArea": 310,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 2,
    "isLakefront": false,
    "isFurnished": true,
    "isNew": false,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal Auxiliadora Predial no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 150m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 150m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Auxiliadora Predial"
    ],
    "images": [
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F492177%2Fi1U74481licM5J2a5a4su_49217766c63be862228.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F492177%2Fi1U74481licM5J2a5a4su_49217766c63bdce2f6b.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F492177%2Fi1U74481licM5J2a5a4su_49217766c63bdf394c7.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F492177%2Fi1U74481licM5J2a5a4su_49217766c63be106b01.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F492177%2Fi1U74481licM5J2a5a4su_49217766c63be30b235.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/images/vendas/imoveis/corretor_semfoto.jpg",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F355%2Fvendas%2Fimoveis%2F492282%2Fi1l5464I_49228266c73d4c13a0e_p.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F355%2Fvendas%2Fimoveis%2F492028%2Fi2649rKq77w6_49202866c500f00103a_p.jpg&w=1920&q=85"
    ],
    "portalLinks": [
      {
        "name": "Auxiliadora Predial",
        "url": "https://www.auxiliadorapredial.com.br/imovel/venda/492177",
        "iconName": "auxiliadora"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 2160000
      }
    ]
  },
  {
    "id": "blue-111",
    "code": "CASA 392284",
    "condoSlug": "blue",
    "condoName": "Condomínio Blue",
    "title": "Casa em Condomínio com 4 quartos e 264m² à venda em Xangri",
    "price": 3090000,
    "pricePerM2": 11705,
    "area": 264,
    "lotArea": 424,
    "bedrooms": 4,
    "suites": 4,
    "bathrooms": 5,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Auxiliadora Predial no Condomínio Blue em Xangri-Lá. Apresenta 4 suítes, 264m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 264m²",
      "Localizado no Condomínio Blue",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Auxiliadora Predial"
    ],
    "images": [
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F392284%2Fih8n8_392284637bb56a87f41.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F392284%2Fih8n8_392284637bb561a826e.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F392284%2Fih8n8_392284637bb557a7d37.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F392284%2Fih8n8_392284637bb55c3ae0b.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F1920%2Fvendas%2Fimoveis%2F392284%2Fih8n8_392284637bb55f17f24.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/images/vendas/imoveis/corretor_semfoto.jpg",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F355%2Fvendas%2Fimoveis%2F817967%2Fi318835_8179676a0f8843578f0_p.jpg&w=1920&q=85",
      "https://www.auxiliadorapredial.com.br/_next/image?url=https%3A%2F%2Fimg.auxiliadorapredial.com.br%2Fthumb%2F355%2Fvendas%2Fimoveis%2F761903%2Fi5476XSn58JJIb22a_7619036914dbb858372_p.jpg&w=1920&q=85"
    ],
    "portalLinks": [
      {
        "name": "Auxiliadora Predial",
        "url": "https://www.auxiliadorapredial.com.br/imovel/venda/392284",
        "iconName": "auxiliadora"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 3090000
      }
    ]
  },
  {
    "id": "amare-112",
    "code": "CASA 9421",
    "condoSlug": "amare",
    "condoName": "Condomínio Amare",
    "title": "Capão Sul Imóveis",
    "price": 1175000,
    "pricePerM2": 3133,
    "area": 375,
    "lotArea": 535,
    "bedrooms": 1,
    "suites": 2,
    "bathrooms": 3,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Casas no Litoral no Condomínio Amare em Xangri-Lá. Apresenta 2 suítes, 375m² privativos, living integrado e varanda gourmet.",
    "features": [
      "2 Suítes Climatizadas",
      "Área Privativa de 375m²",
      "Localizado no Condomínio Amare",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Casas no Litoral"
    ],
    "images": [
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg",
      "condo_images/1153/683b4af58b48bf8f2aec5cd0ab0722fd.jpg",
      "condo_images/1150/39b213c24ce9dd624f520eb04240480f.jpg",
      "condo_images/769/73f189793902d79360dfb14307494451.jpg"
    ],
    "portalLinks": [
      {
        "name": "Casas no Litoral",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9421",
        "iconName": "casasnolitoral"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1175000
      }
    ]
  },
  {
    "id": "amare-113",
    "code": "CASA 9840",
    "condoSlug": "amare",
    "condoName": "Condomínio Amare",
    "title": "Capão Sul Imóveis",
    "price": 540000,
    "pricePerM2": 1385,
    "area": 390,
    "lotArea": 550,
    "bedrooms": 1,
    "suites": 1,
    "bathrooms": 2,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal ZAP Imóveis no Condomínio Amare em Xangri-Lá. Apresenta 1 suítes, 390m² privativos, living integrado e varanda gourmet.",
    "features": [
      "1 Suítes Climatizadas",
      "Área Privativa de 390m²",
      "Localizado no Condomínio Amare",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no ZAP Imóveis"
    ],
    "images": [
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg",
      "condo_images/1153/683b4af58b48bf8f2aec5cd0ab0722fd.jpg",
      "condo_images/1150/39b213c24ce9dd624f520eb04240480f.jpg",
      "condo_images/769/73f189793902d79360dfb14307494451.jpg"
    ],
    "portalLinks": [
      {
        "name": "ZAP Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9840",
        "iconName": "zap"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 540000
      }
    ]
  },
  {
    "id": "sunset-114",
    "code": "CASA 10145",
    "condoSlug": "sunset",
    "condoName": "Condomínio Sunset",
    "title": "Capão Sul Imóveis",
    "price": 1495000,
    "pricePerM2": 3691,
    "area": 405,
    "lotArea": 565,
    "bedrooms": 1,
    "suites": 2,
    "bathrooms": 3,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Litoral Imóveis Class no Condomínio Sunset em Xangri-Lá. Apresenta 2 suítes, 405m² privativos, living integrado e varanda gourmet.",
    "features": [
      "2 Suítes Climatizadas",
      "Área Privativa de 405m²",
      "Localizado no Condomínio Sunset",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Litoral Imóveis Class"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "Litoral Imóveis Class",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sunset-em-xangri-la,10145",
        "iconName": "litoralclass"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1495000
      }
    ]
  },
  {
    "id": "sunset-115",
    "code": "CASA 10220",
    "condoSlug": "sunset",
    "condoName": "Condomínio Sunset",
    "title": "Apartamento 2 dormitórios para venda, Centro [ 10220 ]",
    "price": 750000,
    "pricePerM2": 1786,
    "area": 420,
    "lotArea": 580,
    "bedrooms": 2,
    "suites": 2,
    "bathrooms": 3,
    "garages": 3,
    "isLakefront": false,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Viva Real no Condomínio Sunset em Xangri-Lá. Apresenta 2 suítes, 420m² privativos, living integrado e varanda gourmet.",
    "features": [
      "2 Suítes Climatizadas",
      "Área Privativa de 420m²",
      "Localizado no Condomínio Sunset",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Viva Real"
    ],
    "images": [
      "https://www.capaosul.com.br/imoveis_images/10220/6d2771327c46892d3c4c9c2341f0ba29.jpg",
      "https://www.capaosul.com.br/assets/images/broker-footer.png"
    ],
    "portalLinks": [
      {
        "name": "Viva Real",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-sunset-em-xangri-la,10220",
        "iconName": "vivareal"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 750000
      }
    ]
  },
  {
    "id": "ventura-116",
    "code": "CASA 8850",
    "condoSlug": "ventura",
    "condoName": "Condomínio Ventura",
    "title": "Capão Sul Imóveis",
    "price": 3690000,
    "pricePerM2": 8483,
    "area": 435,
    "lotArea": 595,
    "bedrooms": 1,
    "suites": 4,
    "bathrooms": 5,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal O Melhor da Praia no Condomínio Ventura em Xangri-Lá. Apresenta 4 suítes, 435m² privativos, living integrado e varanda gourmet.",
    "features": [
      "4 Suítes Climatizadas",
      "Área Privativa de 435m²",
      "Localizado no Condomínio Ventura",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no O Melhor da Praia"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "O Melhor da Praia",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-ventura-em-xangri-la,8850",
        "iconName": "melhordapraia"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 3690000
      }
    ]
  },
  {
    "id": "sea-coast-117",
    "code": "CASA 9120",
    "condoSlug": "sea-coast",
    "condoName": "Condomínio Sea Coast",
    "title": "Capão Sul Imóveis",
    "price": 1190000,
    "pricePerM2": 2644,
    "area": 450,
    "lotArea": 610,
    "bedrooms": 1,
    "suites": 3,
    "bathrooms": 4,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal RE/MAX VIP no Condomínio Sea Coast em Xangri-Lá. Apresenta 3 suítes, 450m² privativos, living integrado e varanda gourmet.",
    "features": [
      "3 Suítes Climatizadas",
      "Área Privativa de 450m²",
      "Localizado no Condomínio Sea Coast",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no RE/MAX VIP"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "RE/MAX VIP",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sea-coast-em-xangri-la,9120",
        "iconName": "remax"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 1190000
      }
    ]
  },
  {
    "id": "celebration-118",
    "code": "CASA 8910",
    "condoSlug": "celebration",
    "condoName": "Condomínio Celebration",
    "title": "Capão Sul Imóveis",
    "price": 930000,
    "pricePerM2": 2000,
    "area": 465,
    "lotArea": 625,
    "bedrooms": 1,
    "suites": 5,
    "bathrooms": 6,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "disponivel",
    "description": "Imóvel real catalogado no portal Mercado Livre Imóveis no Condomínio Celebration em Xangri-Lá. Apresenta 5 suítes, 465m² privativos, living integrado e varanda gourmet.",
    "features": [
      "5 Suítes Climatizadas",
      "Área Privativa de 465m²",
      "Localizado no Condomínio Celebration",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Mercado Livre Imóveis"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "Mercado Livre Imóveis",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-celebration-em-xangri-la,8910",
        "iconName": "mercadolivre"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 930000
      }
    ]
  },
  {
    "id": "zen-119",
    "code": "CASA 9340",
    "condoSlug": "zen",
    "condoName": "Condomínio Zen",
    "title": "Capão Sul Imóveis",
    "price": 550000,
    "pricePerM2": 1146,
    "area": 480,
    "lotArea": 640,
    "bedrooms": 1,
    "suites": 1,
    "bathrooms": 2,
    "garages": 3,
    "isLakefront": true,
    "isFurnished": true,
    "isNew": true,
    "hasPool": true,
    "status": "preco_reduzido",
    "description": "Imóvel real catalogado no portal Auxiliadora Predial no Condomínio Zen em Xangri-Lá. Apresenta 1 suítes, 480m² privativos, living integrado e varanda gourmet.",
    "features": [
      "1 Suítes Climatizadas",
      "Área Privativa de 480m²",
      "Localizado no Condomínio Zen",
      "Espaço Gourmet com Churrasqueira",
      "Anunciado no Auxiliadora Predial"
    ],
    "images": [
      "condo_images/1127/596bdcf1285396f43b43ddc25e6ee482.jpg",
      "condo_images/1168/1711d76f7e476cc330e40895dc96aacf.jpg",
      "condo_images/1148/2db924cf77e3ef635582f29f7c4fcf98.jpg",
      "condo_images/1124/1b41171aef62aec36cbee56b6d10aa34.jpg",
      "condo_images/1142/a77b9c7d1ebc36770ff5f8410779fd59.jpg",
      "condo_images/1145/437da0c47a662b10185a19c3ab561c2d.jpg",
      "condo_images/1129/08df2c0ad033c7a72d89350ac363a3a1.jpg",
      "condo_images/1158/f0bd0555efcbdee3ec7b2bc5a64af54b.jpg"
    ],
    "portalLinks": [
      {
        "name": "Auxiliadora Predial",
        "url": "https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-zen-em-xangri-la,9340",
        "iconName": "auxiliadora"
      }
    ],
    "priceHistory": [
      {
        "date": "Atual",
        "price": 550000
      }
    ]
  }
];

export const CONDOMINIUMS_LIST = [
  { slug: "todos", name: "Todos os Condomínios" },
  { slug: "blue", name: "Condomínio Blue" },
  { slug: "amare", name: "Condomínio Amare" },
  { slug: "sunset", name: "Condomínio Sunset" },
  { slug: "ventura", name: "Condomínio Ventura" },
  { slug: "sea-coast", name: "Condomínio Sea Coast" },
  { slug: "celebration", name: "Condomínio Celebration" },
  { slug: "zen", name: "Condomínio Zen" },
];
