import { defineUserConfig } from 'vuepress'
// 文档搜索插件
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// 返回顶部插件
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
// 主题
import { defaultTheme } from 'vuepress'
// 顶部导航配置
import {navbar} from './configs/navbar'
// 侧边栏菜单
import {sidebar} from './configs/sidebar'

export default defineUserConfig({
  base: 'notebook',
  lang: 'zh-CN',
  title: 'BLOG',
  description: '这是VuePress站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar,
    sidebar
  }),
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
    backToTopPlugin()
  ],
})