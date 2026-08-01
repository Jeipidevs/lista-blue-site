const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const CONDOS = [
  {
    slug: "blue",
    name: "Condomínio Blue",
    location: "Xangri-Lá / Capão da Canoa - RS",
    description: "Condomínio fechado de altíssimo padrão com lagoa privativa e estrutura de resort."
  },
  {
    slug: "amare",
    name: "Condomínio Amare",
    location: "Xangri-Lá - RS",
    description: "Condomínio contemporâneo com conceito de clube completo e localização nobre."
  },
  {
    slug: "sunset",
    name: "Condomínio Sunset",
    location: "Xangri-Lá - RS",
    description: "Exclusividade e pôr do sol privilegiado com infraestrutura de lazer completa."
  },
  {
    slug: "ventura",
    name: "Condomínio Ventura",
    location: "Xangri-Lá - RS",
    description: "Ambiente familiar com praça central, quadras esportivas e clube social."
  },
  {
    slug: "sea-coast",
    name: "Condomínio Sea Coast",
    location: "Xangri-Lá - RS",
    description: "Inspirado nas praias da Califórnia com arquitetura praiana de luxo."
  },
  {
    slug: "celebration",
    name: "Condomínio Celebration",
    location: "Xangri-Lá - RS",
    description: "Infraestrutura de resort 5 estrelas com piscinas térmicas e clube de praia."
  },
  {
    slug: "zen",
    name: "Condomínio Zen",
    location: "Xangri-Lá - RS",
    description: "Proposta minimalista voltada ao bem-estar, natureza e tranquilidade."
  }
];

async function main() {
  console.log("Seeding 7 Condominiums into database...");
  for (const c of CONDOS) {
    await prisma.condominium.upsert({
      where: { slug: c.slug },
      update: { name: c.name, location: c.location, description: c.description },
      create: c,
    });
  }
  console.log("Successfully seeded all 7 Condominiums!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
