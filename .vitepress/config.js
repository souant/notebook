export default {
  base: "/notebook/",
  title: "Note Book",
  description: "一个静态的笔记网站.",
  themeConfig: {
    outlineTitle: "页面导航",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "html", link: "/docs/html/" },
      { text: "JS", link: "/docs/javascript/" },
      { text: "JAVA", link: "/docs/java/" },
      { text: "Docker", link: "/docs/docker/" },
      { text: "Vpn", link: "/docs/vpn/" },
    ],
    sidebar: {
      "/docs/javascript/": [
        {
          text: "javascript高级程序设计",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "介绍", link: "/docs/javascript/javascript高级程序设计/" },
            {
              text: "01-javascript组成?",
              link: "/docs/javascript/javascript高级程序设计/01-javascript组成",
            },
            {
              text: "02-script标签",
              link: "/docs/javascript/javascript高级程序设计/02-script标签",
            },
            {
              text: "03-javascript语言基础",
              link: "/docs/javascript/javascript高级程序设计/03-javascript语言基础",
            },
            {
              text: "04-Javascript变量、作用域与内存",
              link: "/docs/javascript/javascript高级程序设计/04-Javascript变量、作用域与内存",
            },
            {
              text: "05-基础引用类型",
              link: "/docs/javascript/javascript高级程序设计/05-基础引用类型",
            },
            {
              text: "06-集合引用类型",
              link: "/docs/javascript/javascript高级程序设计/06-集合引用类型",
            },
          ],
        },
        {
          text: "微前端",
          collapsible: true,
          collapsed: true,
          items: [{ text: "介绍", link: "/docs/javascript/微前端/" }],
        },
        {
          text: "uniapp",
          collapsible: true,
          collapsed: true,
          items: [{ text: "介绍", link: "/docs/javascript/uniapp/" }],
        },
        {
          text: "杂项",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "Array查询元素索引执行效率差异",
              link: "/docs/javascript/杂项/Array查询元素索引执行效率差异.md",
            },
            {
              text: "for循环中return、break、continue作用",
              link: "/docs/javascript/杂项/for循环中return、break、continue作用.md",
            },
          ],
        },
      ],
      "/docs/vpn/": [
        {
          text: "VPN：虚拟专用网络",
          items: [{ text: "v2ray", link: "/docs/vpn/v2ray" }],
        },
      ],
      "/docs/html/": [
        {
          text: "实例实现",
          items: [
            {
              text: "实现一个环形进度条",
              link: "/docs/html/实现一个环形进度条.md",
            },
            {
              text: "实现一个滑动标尺",
              link: "/docs/html/实现一个滑动标尺.md",
            },
          ],
        },
      ],
    },
  },
};
