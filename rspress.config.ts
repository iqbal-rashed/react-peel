import path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: "docs",
  title: "React Peel",
  description: "Create realistic peeling effects in React applications",
  icon: "/favicon.ico",
  logo: "/logo.png",
  base: "/react-peel/",
  globalStyles: path.join(__dirname, "docs", "style.css"),
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
});
