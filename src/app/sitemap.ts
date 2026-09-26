import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexora.agency";

  const routes = [
    "",
    "/work/business-os",
    "/work/ai-business-assistant",
    "/work/ai-document-intelligence",
    "/work/ecommerce",
    "/work/booking",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
