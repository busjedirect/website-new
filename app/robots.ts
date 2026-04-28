import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/aanvraag/", "/api/"],
    },
    sitemap: "https://www.busjedirect.nl/sitemap.xml",
  };
}
