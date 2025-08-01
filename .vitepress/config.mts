import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "任沐铭 | TypeScript笔记",
  description: "TypeScript笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "文档", link: "/markdown-examples" }],

    sidebar: [
      {
        text: "网站部署",
        items: [
          { text: "网站部署", link: "/markdown-examples" },
          { text: "Vue3依赖包", link: "/vue3-package" },
        ],
      },
      {
        text: "TypeScript笔记",
        items: [
          { text: "类型系统", link: "/docs/TypeScript/type-system.md" },
          { text: "tsconfig.json", link: "/docs/TypeScript/tsconfig.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LAmeng030810/blog.renmuming.top",
      },
    ],
  },
});
