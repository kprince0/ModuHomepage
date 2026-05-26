// Schema.org JSON-LD builders for Modu Ramen GEO/SEO
// Designed to be tree-shakeable and to link into the global graph
// established in src/app/layout.tsx (Restaurant, Person, WebSite, FAQPage).

export const SITE_URL = "https://moduramen.com";
export const PUBLISHED_AT = "2024-03-15";
export const MODIFIED_AT = "2026-05-25";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

export type Crumb = { name: string; url: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": abs(item.url),
    })),
  };
}

export type ArticleOpts = {
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
};

export function articleSchema(opts: ArticleOpts) {
  const url = abs(`/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "headline": opts.headline,
    "description": opts.description,
    "image": [abs(opts.image)],
    "datePublished": opts.datePublished || PUBLISHED_AT,
    "dateModified": opts.dateModified || MODIFIED_AT,
    "author": {
      "@type": "Person",
      "@id": `${SITE_URL}/#chef-kim`,
      "name": "Chef Dongil Kim",
      "url": `${SITE_URL}/chef-kim`,
    },
    "publisher": {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      "name": "Modu Ramen",
      "logo": {
        "@type": "ImageObject",
        "url": abs("/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp"),
      },
    },
    ...(opts.articleSection ? { articleSection: opts.articleSection } : {}),
    ...(opts.keywords ? { keywords: opts.keywords.join(", ") } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    "inLanguage": "en-US",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#restaurant` },
  };
}

export type WebPageOpts = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ItemPage";
};

export function webPageSchema(opts: WebPageOpts) {
  const url = abs(`/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": opts.type || "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": opts.name,
    "description": opts.description,
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(opts.image) } } : {}),
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#restaurant` },
    "inLanguage": "en-US",
  };
}

export function imageObjectSchema(opts: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
  author?: "chef" | "restaurant";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": abs(opts.url),
    "url": abs(opts.url),
    "caption": opts.caption,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
    "creator": {
      "@id": opts.author === "chef" ? `${SITE_URL}/#chef-kim` : `${SITE_URL}/#restaurant`,
    },
    "copyrightHolder": { "@id": `${SITE_URL}/#restaurant` },
  };
}
