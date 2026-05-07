import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BusjeDirect | Transport snel geregeld",
    template: "%s | BusjeDirect",
  },
  description:
    "Regel snel en eenvoudig transport voor banken, kasten, witgoed en meer. Kies ophaaladres en bestemming en ontdek direct de prijs. Door heel Nederland.",
  metadataBase: new URL("https://www.busjedirect.nl"),
  openGraph: {
    title: "BusjeDirect | Meubels & witgoed vervoeren",
    description:
      "Bank, kast, wasmachine of complete inboedel laten vervoeren? BusjeDirect haalt op en bezorgt door heel Nederland.",
    locale: "nl_NL",
    type: "website",
    siteName: "BusjeDirect",
  },
  twitter: {
    card: "summary_large_image",
    title: "BusjeDirect | Meubels & witgoed vervoeren",
    description:
      "Bank, kast, wasmachine of complete inboedel laten vervoeren? BusjeDirect haalt op en bezorgt door heel Nederland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={geistSans.variable}>
      <body>
        {/* LocalBusiness schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BusjeDirect",
              "description": "Transportservice voor meubels, witgoed en grote spullen. Drempel-tot-drempeltransport door heel Nederland.",
              "url": "https://www.busjedirect.nl",
              "telephone": "+31631356682",
              "email": "info@busjedirect.nl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Diemen",
                "addressRegion": "Noord-Holland",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.333905,
                "longitude": 4.977463
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "09:00",
                  "closes": "22:00"
                }
              ],
              "priceRange": "€€",
              "areaServed": {
                "@type": "Country",
                "name": "Netherlands"
              },
              "serviceType": "Transport en verhuisservice",
              "sameAs": []
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6524N6L21N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6524N6L21N');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
