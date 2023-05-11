---
lang: zh-CN
title: Note Book
description: Note Book
---

# Note Book

[[toc]]

## vitepress 标记
VitePress 使用markdown-it作为 Markdown 渲染器

### - vitepress 文章前言

```md
---
title: Blogging Like a Hacker
lang: en-US
---
```

---

### - 表情符号

```md
:tada: :100:
```

[《表情符号列表》](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

---

### - `.md` 文件中引入 vue 组件

```js
<script setup>
  import VueComponent from './example/vue-component/index.vue'
</script>
```

### - 目录

```md
[[toc]]
```

### - 自定义容器

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

示例

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

- 导入代码片段

```
<<< @/filepath
```

---

### - 代码组

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

示例

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

### - 引入markdown文件

```md
<!-- @include: ./src/index.md -->
```


---

## markdown 标记

[《Markdown 指南中文版》](https://www.markdown.xyz/cheat-sheet/)

### - markdown 表格

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```
示例

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

### - markdown 删除线

```md
~~The world is flat.~~
```

~~The world is flat.~~


### - markdown 任务列表


```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

  