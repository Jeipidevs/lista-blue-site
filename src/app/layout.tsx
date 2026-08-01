import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casas à Venda no Condomínio Blue | RE/MAX VIP I",
  description: "Portal exclusivo RE/MAX VIP com todas as casas à venda no Condomínio Blue em Xangri-Lá e Capão da Canoa. Galeria de fotos, histórico de preços e links de portais imobiliários.",
  keywords: ["Condomínio Blue", "Casas à Venda Blue", "RE/MAX VIP", "Imóveis Xangri-Lá", "Imóveis Capão da Canoa", "Radar Litoral"],
  authors: [{ name: "RE/MAX VIP I" }],
  openGraph: {
    title: "Casas à Venda no Condomínio Blue | RE/MAX VIP",
    description: "Confira a lista atualizada de casas à venda no Condomínio Blue com comparativo de preços e galeria HD.",
    url: "https://lista.integramob.com.br",
    siteName: "RE/MAX VIP Condomínio Blue",
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
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-remax-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
