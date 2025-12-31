import path from "path";
import fs from "fs";
import { defineConfig } from "rspress/config";

const siteUrl = "https://iqbal-rashed.github.io/react-peel";
const siteName = "React Peel";
const siteDescription =
  "Create stunning, realistic peeling effects in React applications. A lightweight, customizable library for page peel animations, sticky notes, scratch cards, and more.";
const siteKeywords =
  "react peel, react animation, page peel effect, react component, peel animation, sticky note effect, scratch card, react library, javascript animation, css animation, react hooks";

export default defineConfig({
  root: "docs",
  title: siteName,
  description: siteDescription,
  icon: "/favicon.ico",
  logo: "/logo.png",
  logoText: siteName,
  base: "/react-peel/",
  globalStyles: path.join(__dirname, "docs", "style.css"),
  lang: "en",
  locales: [
    {
      lang: "en",
      label: "English",
      title: siteName,
      description: siteDescription,
    },
  ],
  head: [
    // Primary Meta Tags
    ["meta", { name: "keywords", content: siteKeywords }],
    `<meta name="google-site-verification" content="Cd_g_GaBizW_GrvfaaLgrRd9omGyJxrxFKQKf0ktSk8" />`,
    ["meta", { name: "author", content: "Iqbal Rashed" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "googlebot", content: "index, follow" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    [
      "meta",
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
    ],
    ["link", { rel: "canonical", href: siteUrl }],

    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: siteUrl }],
    ["meta", { property: "og:title", content: siteName }],
    ["meta", { property: "og:description", content: siteDescription }],
    ["meta", { property: "og:image", content: `${siteUrl}/og-image.jpeg` }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    [
      "meta",
      {
        property: "og:image:alt",
        content: "React Peel - Realistic peeling effects for React",
      },
    ],
    ["meta", { property: "og:site_name", content: siteName }],
    ["meta", { property: "og:locale", content: "en_US" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:url", content: siteUrl }],
    ["meta", { name: "twitter:title", content: siteName }],
    ["meta", { name: "twitter:description", content: siteDescription }],
    ["meta", { name: "twitter:image", content: `${siteUrl}/og-image.jpeg` }],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "React Peel - Realistic peeling effects for React",
      },
    ],

    // Additional SEO
    ["meta", { name: "theme-color", content: "#3b82f6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    ],
    ["meta", { name: "apple-mobile-web-app-title", content: siteName }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],

    // Structured Data (JSON-LD)

    `<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "React Peel",
          "description": "Create stunning, realistic peeling effects in React applications. A lightweight, customizable library for page peel animations, sticky notes, scratch cards, and more.",
          "url": "https://iqbal-rashed.github.io/react-peel",
          "codeRepository": "https://github.com/iqbal-rashed/react-peel",
          "programmingLanguage": ["TypeScript", "JavaScript", "React"],
          "runtimePlatform": "Node.js",
          "license": "https://opensource.org/licenses/MIT",
          "author": {
            "@type": "Person",
            "name": "Iqbal Rashed",
            "url": "https://github.com/iqbal-rashed"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
    </script>`,
  ],
  ssg: {
    strict: true,
  },
  builderConfig: {
    tools: {
      rspack: {
        resolve: {
          alias: {
            "react-peel": path.resolve(__dirname, "src/index.ts"),
          },
        },
      },
    },
    html: {
      meta: {
        charset: "UTF-8",
      },
    },
  },
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
            {
              text: "Animations",
              link: "/guide/animations",
            },
            {
              text: "Implementation",
              link: "/guide/implementation",
            },
          ],
        },
        {
          text: "Examples",
          items: [
            {
              text: "Sticky Note",
              link: "/examples/sticky-note",
            },
            {
              text: "Calendar Flip",
              link: "/examples/calendar-flip",
            },
            {
              text: "Envelope",
              link: "/examples/envelope",
            },
            {
              text: "Gift Card",
              link: "/examples/gift-card",
            },
            {
              text: "Magazine",
              link: "/examples/magazine",
            },
            {
              text: "Photo Album",
              link: "/examples/photo-album",
            },
            {
              text: "Product Card",
              link: "/examples/product-card",
            },
            {
              text: "Scratch Card",
              link: "/examples/scratch-card",
            },
          ],
        },

        {
          text: "Api",
          items: [
            {
              text: "Components",
              link: "/api/components",
            },

            {
              text: "Hooks",
              link: "/api/hooks",
            },
          ],
        },
      ],
    },
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started",
      },
      {
        text: "Examples",
        link: "/examples/sticky-note",
      },
      {
        text: "Api",
        link: "/api/components",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/iqbal-rashed/react-peel",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
    },
  },
  markdown: {
    showLineNumbers: true,
  },

  plugins: [
    {
      name: "sitemap-generator",
      async afterBuild(config, isProd) {
        if (!isProd) return;

        const pages = [
          "",
          "/guide/getting-started",
          "/guide/animations",
          "/guide/implementation",
          "/examples/sticky-note",
          "/examples/calendar-flip",
          "/examples/envelope",
          "/examples/gift-card",
          "/examples/magazine",
          "/examples/photo-album",
          "/examples/product-card",
          "/examples/scratch-card",
          "/api/components",
          "/api/hooks",
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(
              (page) => `  <url>
              <loc>${siteUrl}${page}</loc>
              <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === "" ? "1.0" : "0.8"}</priority>
            </url>`
            )
            .join("\n")}
          </urlset>`;

        const outDir = config.outDir || "doc_build";
        fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
        console.log("✓ Sitemap generated successfully");
      },
    },
  ],
});
