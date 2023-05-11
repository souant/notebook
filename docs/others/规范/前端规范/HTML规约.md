# HTML 规约

:::tip
Vue Template 同样适用
:::


## 一、文档

## 1.1 文档规范

1. 【强制】使用 HTML5 DOCTYPE
   
在 HTML 文档的开头使用 `<!DOCTYPE html>` 来声明文档的 HTML 版本。

   - `doctype` 大写
   - 标签必须合法且闭合、嵌套正确，标签名需小写


正例：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <!-- body -->
  </body>
</html>
```

反例

```html
<!-- bad - 非 HTML 5 DOCTYPE -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
 <head>
    <title>Page title</title>
  </head>
  <body>
    <!-- body -->
  </body>
</html>
```


2.  【推荐】在 `head` 标签内引入 CSS，在 `body` 结束标签前引入 JS。
   
正例：
```html
<html>
  <head>
    <style>
      .mod-example {
        padding-left: 15px;
      }
    </style>
  </head>
  <body>
    ...
    <script src="path/to/my/script.js"></script>
  </body>
</html>
```

反例：

```html
<!-- bad -->
<!DOCTYPE html>
<html>
  <head>
    <script src="mod-a.js"></script>
    <script src="jquery.js"></script>
  </head>
  <body>
    <style>
      .mod-example {
         padding-left: 15px;
      }
    </style>
   </body>
</html>
```

## 1.2 元数据

1. 【推荐】使用 UTF-8 字符编码。

- 声明一个明确的字符编码，可以让浏览器更快速高效地确定适合网页内容的渲染方式。
- 由于历史原因，不同浏览器采用了不同的字符编码。但对于新业务，如无特殊要求，统一使用 UTF-8 字符编码，以便统一。
- 在 HTML 中使用 `<meta charset="utf-8" />` 声明文档的编码方式：

```html
<head>
  <meta charset="utf-8" />
</head>
```

2. 【推荐】页面提供给移动设备使用时，需要设置 viewport。

- 设置 viewport-fit 设置为“cover”来兼容 iPhone X 的刘海屏，了解更多 。

```html
<meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
```

3. 【强制】保证 favicon.ico 可访问。

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

   1. 在 Web Server 根目录放置 favicon.ico 文件。
   2. 使用 link 指定 favicon。

示例：

```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```


## 二、编码


## 2.1 缩进

   1. 【强制】统一使用 2 个空格缩进

   不要使用 4 个空格或 tab 缩进，设置vscode缩进tab 2个字符



## 2.2 注释

   1. 【推荐】分块注释

   在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。注释格式

   ```html
   正例：
   <body>
     <!-- header 头部 start -->
     <header>
       <div class="container">
         <a href="#">
         <!-- 图片会把 a 标签给撑开，所以不用设置 a 标签的大小 -->
         <img src="images/header.jpg" />
         </a>
       </div>
     </header>
     <!-- header 头部 end -->
   </body>
   ```

   2.  【强制】在 HTML 注释代码中，不允许出现任何敏感信息。

       常见的敏感信息包括：
       - 业务相关敏感信息，例如业务规则
       - 员工个人隐私信息，例如邮箱、手机、身份证号码
       - AK（accessKey id, accesskey secret）
       - 证书、密码
       - 内网 IP、URL
       - 其他公司、员工相关的内部信息、敏感信息

## 2.3 标签

  1. 【强制】语义化标签

  HTML 标签（更严谨的叫法是 HTML 元素）都有其语义，例如 p 标签即“paragraphs”用于章节，a 标签即“anchors”用于锚点链接。我们应优先选取符合当下所需语义的标签，这既有助于可访问性（Accessibility），也可以在 CSS 加载失败时获得较好的展示效果

  正例

  ```html
  <header></header>
  <footer></footer>
  ```

  反例

  ```html
  <div>
    <p></p>
  </div>
  ```
  2. 【强制】标签名统一使用小写，且标签必须正确闭合
    
  正例：

  ```html
  <!-- good -->
  <h1>Hello, world!</h1>
  <img src="...">
  ```

  反例：

  ```html
  <!-- bad -->
  <H1>Hello, world!</H1>
  <img src="..." />
  ```

  3. 【强制】标签使用必须符合标签嵌套规则。

  比如 div 不得置于 p 中，tbody 必须置于 table 中。

  详细的标签嵌套规则参见HTML DTD中的 Elements 定义部分。

  4. 【强制】禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 `src`

  > src 取值为空，会导致部分浏览器重新加载一次当前页面，参考：https://developer.yahoo.com/performance/rules.html#emptysrc

      【推荐】为重要图片添加 `alt` 属性
      
      1. 【推荐】a 标签的使用
      2. 给 `<a>` 标签加上title属性
      3. `<a>`标签的href属性必须写上链接地址，暂无的加上 `javascript:alert('敬请期待！')`
      4. 非本专题的页面间跳转，采用打开新窗口模式：`target="_blank"  `                            


## 2.4 属性

  1. 【强制】属性名必须使用小写字母。

  正例

  ```html
  <!-- good -->
   <table cellspacing="0">...</table>
  ```

  反例

  ```html
  <!-- bad -->
  <table cellSpacing="0">...</table>
  ```

  2. 【强制】属性值使用双引号，不要使用单引号。

  使用双引号 (“ “) 而不是单引号 (‘ ‘) 。

  正例

  ```html
  <div class=""></div>
  ```

  反例

  ```html
  <div class=''></div>
  ```

  3. 【推荐】自定义属性的命名：以 data- 为前缀。

  建议自定义属性的命名都以 data- 为前缀，以便区分。

  正例：

  ```html
  <a data-modal="toggle" href="#">
    Example link
  </a>
  ```

  反例：

  ```html
  <a modal="toggle" href="#">
    Example link
  </a>
  ```

  4. 【强制】class 必须单词全字母小写，单词间以 - 分隔。

  > class 【推荐】必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。

  正例：

  ```html
  <!-- good -->
  <div class="header-logo"></div>
  <div class="sidebar"></div>
  ```

  反例：

  ```html
  <!-- bad -->
  <div class="headerLogo"></div>
  <div class="left"></div>
  ```

  5. 【强制】同一页面，应避免使用相同的 `name` 与 `id`

  IE 浏览器会混淆元素的 `id` 和 `name` 属性， `document.getElementById` 可能获得不期望的元素。所以在对元素的 `id` 与 `name` 属性的命名需要非常小心。

  一个比较好的实践是，为 `id` 和 `name` 使用不同的命名法。                