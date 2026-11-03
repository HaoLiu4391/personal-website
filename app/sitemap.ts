import type { MetadataRoute } from "next";

// Lists the pages for search engines; submitted once in Google Search Console.
// A robots.txt would have to sit at the root of haoliu4391.github.io, outside this site.
export const dynamic = "force-static";

const HOME = "https://haoliu4391.github.io/personal-website";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/cv", "/reading", "/friends"].map((path) => ({
    url: HOME + path,
    lastModified: process.env.UPDATED || undefined,
  }));
}
