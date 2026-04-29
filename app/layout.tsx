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
