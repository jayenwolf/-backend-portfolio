import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";

const baseUrl = "https://example.com";

export default function sitemap() {
  const homePages = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  return [...homePages, ...projectPages];
}
