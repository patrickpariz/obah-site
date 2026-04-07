import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Obah! Bar & Ginkeria - Sao Goncalo, RJ",
  description: "Bar, Ginkeria e Casa de Shows em Sao Goncalo, RJ. Eventos, momentos, memorias e encontros. Voce merece o melhor!",
  keywords: "bar, ginkeria, shows, eventos, Sao Goncalo, RJ, ingressos, festa",
  openGraph: {
    title: "Obah! Bar & Ginkeria - Sao Goncalo, RJ",
    description: "Bar, Ginkeria e Casa de Shows em Sao Goncalo, RJ. Eventos, momentos, memorias e encontros.",
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
    title: "Obah! Bar & Ginkeria - Sao Goncalo, RJ",
    description: "Bar, Ginkeria e Casa de Shows em Sao Goncalo, RJ.",
  },
  metadataBase: new URL("https://www.obahoficial.com.br"),
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "Obah! Bar & Ginkeria",
  "image": "https://www.obahoficial.com.br/og-image.jpg",
  "url": "https://www.obahoficial.com.br",
  "telephone": "+5521993753021",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Francisco Portela, 2534",
    "addressLocality": "Sao Goncalo",
    "addressRegion": "RJ",
    "postalCode": "24435-005",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.8268,
    "longitude": -43.0539
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "504"
  },
  "servesCuisine": "Bar, Ginkeria, Petiscos",
  "priceRange": "R$80-100",
  "sameAs": [
    "https://instagram.com/obahginkeria",
    "https://wa.me/5521993753021"
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '35161662913447457');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}