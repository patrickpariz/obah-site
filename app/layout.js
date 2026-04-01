import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Obah! Bar & Ginkeria — São Gonçalo, RJ",
  description: "Bar, Ginkeria e Casa de Shows em São Gonçalo, RJ. Eventos, momentos, memórias e encontros. Você merece o melhor!",
  keywords: "bar, ginkeria, shows, eventos, São Gonçalo, RJ, ingressos, festa",
  openGraph: {
    title: "Obah! Bar & Ginkeria — São Gonçalo, RJ",
    description: "Bar, Ginkeria e Casa de Shows em São Gonçalo, RJ. Eventos, momentos, memórias e encontros.",
    url: "https://www.obahoficial.com.br",
    siteName: "Obah!",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.obahoficial.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Obah! Bar & Ginkeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obah! Bar & Ginkeria — São Gonçalo, RJ",
    description: "Bar, Ginkeria e Casa de Shows em São Gonçalo, RJ.",
  },
  metadataBase: new URL("https://www.obahoficial.com.br"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}