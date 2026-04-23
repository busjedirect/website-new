import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BusjeDirect — Transport snel geregeld",
    template: "%s | BusjeDirect",
  },
  description:
    "Regel snel en eenvoudig transport voor banken, kasten, witgoed en meer. Kies ophaaladres en bestemming en ontdek direct de prijs. Door heel Nederland.",
  openGraph: {
    title: "BusjeDirect — Transport snel geregeld",
    description:
      "Regel snel en eenvoudig transport voor banken, kasten, witgoed en meer. Door heel Nederland.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
