import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { gyms } from "@/data/gym";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/o-nama`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/usluge`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    {
      url: `${SITE.url}/politika-privatnosti`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const gymPages: MetadataRoute.Sitemap = gyms.map((gym) => ({
    url: `${SITE.url}/teretane/${gym.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: gym.type === "coming-soon" ? 0.4 : 0.8,
  }));

  return [...staticPages, ...gymPages];
}
