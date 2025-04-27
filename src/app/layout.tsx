import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/context/languageContext";
import { Roboto } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Pode escolher os pesos que quiser
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description:
    "Meu nome é Lucas, sou desenvolvedor com experiência em React, Node.js e criação de interfaces modernas. Veja meus projetos e entre em contato!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={roboto.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}
