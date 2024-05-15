import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

export default defineConfig({
  base: "/notebook/",
  title: "Note Book",
  description: "一个静态的笔记网站.",
  themeConfig: {
    // 文档footer
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: nav,
    sidebar: sidebar,
    outline: [2, 6],
    // 搜索
    search: {
      provider: "local",
    },
  },
});
