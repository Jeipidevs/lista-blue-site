export interface CondoTarget {
  slug: string;
  name: string;
}

export const CONDO_TARGETS: CondoTarget[] = [
  { slug: 'blue', name: 'Condomínio Blue' },
  { slug: 'amare', name: 'Condomínio Amare' },
  { slug: 'sunset', name: 'Condomínio Sunset' },
  { slug: 'ventura', name: 'Condomínio Ventura' },
  { slug: 'sea-coast', name: 'Condomínio Sea Coast' },
  { slug: 'celebration', name: 'Condomínio Celebration' },
  { slug: 'zen', name: 'Condomínio Zen' },
];

export interface PortalTarget {
  url: string;
  condo: string;
}

export const PORTAL_URLS: PortalTarget[] = [
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-blue-em-xangri-la,10661', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,11739', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8359', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8541', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8356', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8068', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8357', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-xangri-la-em-xangri-la,11327', condo: 'blue' },
  { url: 'https://www.capaosul.com.br/venda/apartamento-4-dormitorios-para-venda-cond.-blue-em-xangri-la,8067', condo: 'blue' },
  { url: 'https://www.auxiliadorapredial.com.br/imovel/venda/492177', condo: 'blue' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9421', condo: 'amare' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-amare-em-xangri-la,9840', condo: 'amare' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sunset-em-xangri-la,10145', condo: 'sunset' },
  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-5-dormitorios-para-venda-cond.-sunset-em-xangri-la,10220', condo: 'sunset' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-ventura-em-xangri-la,8850', condo: 'ventura' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-sea-coast-em-xangri-la,9120', condo: 'sea-coast' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-celebration-em-xangri-la,8910', condo: 'celebration' },

  { url: 'https://www.capaosul.com.br/venda/casa-em-condominio-4-dormitorios-para-venda-cond.-zen-em-xangri-la,9340', condo: 'zen' },
];
