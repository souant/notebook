import nav from "./nav";
import sidebar from "./sidebar";

export default {
  base: "/notebook/",
  title: "Note Book",
  description: "一个静态的笔记网站.",
  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: nav,
    sidebar: sidebar,
  },
};
