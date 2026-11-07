import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ssc-cgl-code.vercel.app";
  const now = new Date();

  // Core Pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pattern-lab`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // General Awareness Specialized Full-Page Syllabuses
  const gaSyllabusSlugs = [
    "ancient-history",
    "medieval-modern",
    "polity",
    "constitution",
    "geography",
    "science",
    "environment",
  ];

  gaSyllabusSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/syllabus/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // 9 Mock Exam Simulator Pages & 9 Answer Keys
  for (let i = 1; i <= 9; i++) {
    routes.push({
      url: `${baseUrl}/mock/${i}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    routes.push({
      url: `${baseUrl}/mock/${i}/key`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 4 Topper Tips Pages
  ["m", "r", "e", "k"].forEach((sub) => {
    routes.push({
      url: `${baseUrl}/tips/${sub}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return routes;
}

