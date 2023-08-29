## 常用的loader

- `sass-loader`：将SCSS/SASS代码转换成CSS
- `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀，加上兼容的浏览器厂商前缀
- `css-loader`：处理样式之间互相引用的逻辑, 加载 CSS，支持模块化、压缩、文件导入等特性
- `style-loader`：将 css-loader 解析后的内容挂载到 html 页面当中

- `file-loader`：可以指定要复制和放置资源文件的位置，以及使用版本哈希命名以获得更好的缓存，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)。
- `url-loader`：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码，减少HTTP请求

- `image-loader`：加载并且压缩图片文件

- `source-map-loader`：加载额外的 Source Map 文件，以方便断点调试

- `json-loader`: 加载 JSON 文件（默认包含）

- `babel-loader`：把 ES6 转换成 ES5

- `ts-loader`: 将 TypeScript 转换成 JavaScript

- `tslint-loader`：通过 TSLint检查 TypeScript 代码
- `eslint-loader`：通过 ESLint 检查 JavaScript 代码

- `mocha-loader`：加载 Mocha 测试用例的代码
- `coverjs-loader`：计算测试的覆盖率

- `vue-loader`：将 Vue 组件转换为 JavaScript 模块

- `i18n-loader`: 国际化
- `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader


## 常用的plugin

- `html-webpack-plugin`：在 dist 下生成 html 文件。简化 HTML 文件创建 (依赖于 html-loader)

- `clean-webpack-plugin`: 目录清理。把 dist 删除再生成打包结果
- `copy-webpack-plugin`: 因为 public 文件下的资源是固定的，直接拷贝到编译后的文件夹引入使用就可以，例如 favicon.ico
- `open-browser-webpack-plugin`: 启动webpack之后，自动打开浏览器

- `mini-css-extract-plugin`: 分离样式文件，CSS 提取为独立文件，支持按需加载

- `webpack-parallel-uglify-plugin`: 多进程执行代码压缩，提升构建速度
- `HappyPack Plugin`: 开启多进程打包，提升打包速度

- `webpack-bundle-analyzer`: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

- `Dllplugin`: 动态链接库，将项目中依赖的三方模块抽离出来，单独打包

- `DllReferencePlugin`: 配合 Dllplugin，通过 manifest.json 映射到相关的依赖上去
- `vue-skeleton-webpack-plugin`: vue 项目实现骨架屏

