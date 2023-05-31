export default [
  // html
  { text: "HTML", link: "/docs/html/" },


  // css
  { text: "CSS", link: "/docs/css/" },


  // js
  {
    text: "JavaScript",
    items: [
      { text: "书籍", link: "/docs/javascript/books/" },
      { text: "框架", link: "/docs/javascript/frame/" },
      { text: "Vue", link: "/docs/javascript/vue/" },
      { text: "TypeScript", link: "/docs/javascript/TypeScript/" },
      { text: "webpack", link: "/docs/javascript/webpack/" },
      { text: "正则表达式", link: "/docs/javascript/regex/" },
      { text: "其他", link: "/docs/javascript/others/" },
    ],
  },


  // rust
  { text: "Rust", link: "/docs/rust/" },


  // java
  { text: "Java", link: "/docs/java/" },

  // 其他
  { text: "其他", items: [
    { text: "规范", link: "/docs/others/规范/" },
    { text: "VPN", link: "/docs/others/vpn/" },
    { text: "Docker", link: "/docs/others/docker/" },
    { text: "Nginx", link: "/docs/others/nginx/" },
    { text: "Interview", link: "/docs/others/interview/" }
  ] },
];
