# 前端规范

:::tip 
致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性
:::

## 规范文档

[《通用命名规范》](./通用命名规范.html)

[《HTML规约》](./HTML规约.html)

[《CSS规约》](./CSS规约.html)

[《Javascript规约》](./Javascript规约.html)

[《VUE规约》](./VUE规约.html)

## 规范工具

> vscode:  `eslint + prettier` 插件


## 使用方式：

1. 安装`eslint`，`pritter` 插件
2. 项目中安装eslint包 `npm i -D eslint`
3. 使用 `npx eslint --init `初始化eslint配置
  项目中创建`.eslintrc.js`文件配置eslint规则，或使用创建`.eslintignore`配置eslint检查忽略
4. 项目中创建`.prettierrc` 文件，配置prettier与eslint冲突规则覆盖
5. 【推荐】或者安装`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
    - 使用`eslint-config-prettier`解决eslint与prettier规则冲突
    - 使用`eslint-plugin-prettier` 将prettier规则注入到eslint
6. 项目开发中使用`prettier`格式化开发代码，可配置保存文件时格式化


## 配置示例

> `.eslintrc.js`文件配置

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
}
```

```json
.prettierrc文件配置
{
  // 行最大字符数，超过换行
  "printWidth": 120,
  // 行尾不加分号
  "semi": false,
  // 使用单引号
  "singleQuote": true,
  // 系统行尾
  "endOfLine": "auto"
}
```

## 参考：

[vue2风格指南](https://v2.cn.vuejs.org/v2/style-guide/)

[阿里巴巴](https://github.com/alibaba/f2e-spec)

[腾讯-alloyteam](http://alloyteam.github.io/CodeGuide)

[百度](https://github.com/ecomfe/spec)