import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";
import {projects} from "@/data";
import {siteConfig} from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/projects", ...Object.values(projects).map((p) => p.route)];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])),
      },
    }))
  );
}
