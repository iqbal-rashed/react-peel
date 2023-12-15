import { defineConfig } from "islandjs";
const version = require("../../package.json").version;

export default defineConfig({
  title: "React Peel",
  enableSpa: true,
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started",
        activeMatch: "/guide/",
      },
      {
        text: `v${version}`,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/sanyuan0704/island.js/blob/master/CHANGELOG.md",
          },
          {
            text: "Contributing",
            link: "https://github.com/sanyuan0704/island.js/blob/master/.github/contributing.md",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/iqbal-rashed/react-peel",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
            {
              text: "Examples",
              link: "/guide/examples",
            },
            {
              text: "Api",
              link: "/guide/api",
            },
          ],
        },
      ],
    },
  },
});
