import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Locatie pagina's
      { source: "/transport-amsterdam",   destination: "/locaties/amsterdam",   permanent: true },
      { source: "/transport-amstelveen",  destination: "/locaties/amstelveen",  permanent: true },
      { source: "/transport-diemen",      destination: "/locaties/diemen",      permanent: true },
      { source: "/transport-badhoevedorp",destination: "/locaties/badhoevedorp",permanent: true },
      { source: "/transport-weesp",       destination: "/locaties/weesp",       permanent: true },
      { source: "/transport-zaandam",     destination: "/locaties/zaandam",     permanent: true },
      { source: "/transport-bussum",      destination: "/locaties/bussum",      permanent: true },
      { source: "/transport-hoofddorp",   destination: "/locaties/hoofddorp",   permanent: true },
      { source: "/transport-almere",      destination: "/locaties/almere",      permanent: true },
      { source: "/transport-purmerend",   destination: "/locaties/purmerend",   permanent: true },
      { source: "/transport-haarlem",     destination: "/locaties/haarlem",     permanent: true },

      // Diensten
      { source: "/kleine-verhuizing",     destination: "/diensten/kleine-verhuizing", permanent: true },
      { source: "/transport-service",     destination: "/diensten",             permanent: true },

      // Overige pagina's
      { source: "/over-ons",              destination: "/",                     permanent: true },
      { source: "/hoe-het-werkt",         destination: "/",                     permanent: true },
    ];
  },
};

export default nextConfig;
