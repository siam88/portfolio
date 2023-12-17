import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://siam88.vercel.app/",
      lastModified: new Date(),
      //   changeFrequency: 'yearly',
      //   priority: 1,
    },
    {
      url: "https://siam88.vercel.app/projects",
      lastModified: new Date(),
      //   changeFrequency: 'monthly',
      //   priority: 0.8,
    },
  ];
}
