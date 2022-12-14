export default {
  base: '/notebook/',
  title: 'Note Book',
  description: '一个静态的笔记网站.',
  themeConfig: {
    nav: [
      { text: 'JS', link: '/docs/javascript/' },
      { text: 'JAVA', link: '/docs/java/' },
      { text: 'Docker', link: '/docs/docker/' }
    ],
    sidebar: {
      '/docs/javascript/': [
        {
          text: 'javascript高级程序设计',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '介绍', link: '/docs/javascript/javascript高级程序设计/'},
            { text: '01-javascript组成?', link: '/docs/javascript/javascript高级程序设计/01-javascript组成' },
            { text: '02-script标签', link: '/docs/javascript/javascript高级程序设计/02-script标签' },
            { text: '03-javascript语言基础', link: '/docs/javascript/javascript高级程序设计/03-javascript语言基础' },
            { text: '04-Javascript变量、作用域与内存', link: '/docs/javascript/javascript高级程序设计/04-Javascript变量、作用域与内存' },
            { text: '05-基础引用类型', link: '/docs/javascript/javascript高级程序设计/05-基础引用类型' },
            { text: '06-集合引用类型', link: '/docs/javascript/javascript高级程序设计/06-集合引用类型' }
          ]
        },
        {
          text: '微前端',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '介绍', link: '/docs/javascript/微前端/'},
          ]
        }
      ]
    }
  }
}