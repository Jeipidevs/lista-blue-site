import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radar Litoral — RE/MAX VIP",
  description: "Terminal de Inteligência e Monitoramento de Imóveis nos condomínios de luxo de Xangri-Lá e Capão da Canoa. Acesso exclusivo para corretores RE/MAX VIP.",
  keywords: ["Radar Litoral", "RE/MAX VIP", "Condomínio Blue", "Condomínio Amare", "Condomínio Sunset", "Imóveis Xangri-Lá", "Capão da Canoa"],
  icons: {
    icon: "/LOGO-REMAX.jpeg",
    shortcut: "/LOGO-REMAX.jpeg",
    apple: "/LOGO-REMAX.jpeg",
  },
  openGraph: {
    title: "Radar Litoral — RE/MAX VIP",
    description: "Terminal de Inteligência de Mercado nos Condomínios do Litoral Norte RS.",
    url: "https://lista.integramob.com.br",
    siteName: "Radar Litoral RE/MAX VIP",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/LOGO-REMAX.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/LOGO-REMAX.jpeg" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-remax-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
