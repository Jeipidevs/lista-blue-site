/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.zapimoveis.com.br',
      },
      {
        protocol: 'https',
        hostname: '**.vivareal.com.br',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
