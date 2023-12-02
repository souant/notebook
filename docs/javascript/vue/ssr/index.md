# 服务端渲染

> 基于 vue-cli 脚手架创建的 vue 项目
> 
> 参考 [v2.ssr.vuejs.org](https://v2.ssr.vuejs.org/zh/)

![vue服务端渲染架构](../images/03.png)

## 第一步 客户端代码改造为服务端渲染代码

1. 改造`/src/main.js`,更改名称为`app.js`

```js
import Vue from "vue";
import App from "./App.vue";
import { createStore } from "./store";
import { createRouter } from "./router";

// 工厂函数，用于创建一组新的 store、router、
// 每次调用时的应用程序实例（为每个 SSR 请求调用）
export function createApp() {
  // 创建 store and router
  const store = createStore();
  const router = createRouter();

  // 创建应用程序实例。
  // 这里我们将 router、store 和 ssr 上下文注入到所有子组件中，
  // 使它们可以作为 `this.$router` 和 `this.$store` 随处可用。
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });

  // 导出 app store router。
  // 请注意，不能在这$mount，需要取决于我们是在浏览器中还是在服务器上。
  return { app, router, store };
}
```

2. 增加客户端渲染，打包入口文件，`/src/entry-client.js`

```js
import { createApp } from "./app";

const { app, router, store } = createApp();

// 使用服务器初始化状态来准备存储。
// 状态在 SSR 期间确定并内联在页面标记中。
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// 路由钩子完成后
router.onReady(() => {
  // 执行客户端渲染
  app.$mount("#app");
});
```

3. 增加服务端渲染渲染，打包入口文件，`/src/entry-server.js`

```js
import { createApp } from "./app";

// 导出服务端渲染函数,将由 `bundleRenderer` 调用。
// 这是我们执行数据预取以确定
// 我们的应用程序在实际渲染之前的状态。
// 由于数据获取是异步的，因此该函数应该
// 返回一个解析为应用程序实例的 Promise。
export default (context) => {
  return new Promise((resolve, reject) => {
    // 创建实例
    const { app, router, store } = createApp();

    const { url } = context;
    const { fullPath } = router.resolve(url).route;

    if (fullPath !== url) {
      return reject({ url: fullPath });
    }

    // 解析路由
    router.push(url);

    // 等待路由解析完成
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 未匹配到路由
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      // 数据预取
      // 路由匹配的组件上调用 asyncData 钩子。
      // asyncData 钩子获取数据后执行服务端渲染
      Promise.all(
        matchedComponents.map(
          ({ asyncData }) =>
            asyncData &&
            asyncData({
              store,
              route: router.currentRoute,
            })
        )
      )
        .then(() => {
          // 在所有 asyncData 钩子都解析之后
          // 暴露渲染上下文的状态，执行写入script window.__INITIAL_STATE__
          // 客户端可以获取到服务端已获取的状态
          context.state = store.state;
          // 返回服务端渲染app
          resolve(app);
        })
        .catch(reject);
    }, reject);
  });
};
```

> 这样就完成了 webpack 打包前置修改

## 第二步 构建渲染 bundle

1. 安装 vue-server-renderer 等构建需要的依赖

```bash
# instal vue-server-renderer
# 注意版本需要与vue版本对应
yarn add vue-server-renderer

# install webpack构建时需要的插件
# rimraf 用于删除构建
# cross-env 用于设置环境变量
yarn add -D webpack-node-externals rimraf cross-env

```

2. 修改`vue.config.js`,
   > 需要使用`vue-server-renderer`插件构建出，客户端渲染包`vue-ssr-client-manifest.json`、服务端渲染包`vue-ssr-server-bundle.json`

```js
const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// 客户端渲染包构建插件
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
// 服务端渲染包构建插件
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

// 判断是否服务端渲染打包
const isTargetNode = process.env.TARGET_ENV === "node";
const target = isTargetNode ? "server" : "client";

module.exports = defineConfig({
  transpileDependencies: true,
  // runtimeCompiler: true,
  publicPath: "/dist/",
  // productionSourceMap: true,
  // assetsDir: "static",
  lintOnSave: true,
  css: {
    // 不抽离css
    extract: true,
    // 开启sourceMap，解决服务端渲染报错TypeError: Cannot read properties of undefined (reading 'replace') vue-server-renderer\build.prod.js
    sourceMap: true,
  },
  configureWebpack: {
    entry: `./src/entry-${target}.js`,
    target: isTargetNode ? "node" : "web",
    node: isTargetNode ? {} : false,
    // 对 bundle renderer 提供 source map 支持
    devtool: "source-map",
    output: {
      filename: "[name].[chunkhash].js",
      // 服务端node环境打包为comminjs包
      libraryTarget: isTargetNode ? "commonjs2" : undefined,
    },
    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: isTargetNode
      ? nodeExternals({
          // 不要外置化 webpack 需要处理的依赖模块。
          // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
          // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
          allowlist: [/\.css$/, /\?vue&type=style/],
        })
      : undefined,
    plugins: isTargetNode
      ? [
          new VueSSRServerPlugin(),
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          }),
        ]
      : [new VueSSRClientPlugin()],
  },
  chainWebpack(config) {
    // 服务端构建配置
    if (isTargetNode) {
      // 删除热更新
      config.plugins.delete("hmr"); // fix ssr hot update bug
      // 服务端不分包
      config.optimization.splitChunks(undefined);
    }
    config.plugins.delete("friendly-errors");
    // 删除 HTML 相关的 webpack 插件
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  },
});
```

3. 设置`npm`构建命令

```json
{
  "scripts": {
    "build": "rimraf dist && npm run build:client && npm run build:server",
    "build:client": "cross-env TARGET_ENV=web vue-cli-service build --no-clean --mode=production",
    "build:server": "cross-env TARGET_ENV=node vue-cli-service build --no-clean --mode=production"
  }
}
```

4. 运行`npm run build`

得到

```
dist
  ├─vue-ssr-client-manifest.json
  ├─vue-ssr-server-bundle.json
```

## 第三步 服务端服务

1. 安装服务所需依赖

```bash
# 使用express node 服务框架
# compression 用于请求压缩
# serve-favicon 用于响应页面favicon.ico
yarn add express compression serve-favicon
```

2. 创建`/server/index.js`

```js
const fs = require("fs");
const path = require("path");
const resolve = (file) => path.resolve(__dirname, file);

const express = require("express");
// 页面favicon
const favicon = require("serve-favicon");
const compression = require("compression");
// 服务端渲染函数
const { createBundleRenderer } = require("vue-server-renderer");

const app = express();
// 环境
const isProd = process.env.NODE_ENV === "production";
/**
 * 创建服务端渲染器
 * @param {*} bundle 服务端渲染包
 * @param {*} options 参数
 * @returns
 */
function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      // this is only needed when vue-server-renderer is npm-linked
      basedir: resolve("../dist"),
      // recommended for performance
      runInNewContext: false,
    })
  );
}

let renderer;
let readyPromise;
const templatePath = resolve("./index.template.html");
if (isProd) {
  // 在生产中：使用模板创建服务器渲染器并构建服务器包。
  // 服务器包由 vue-ssr-webpack-plugin 生成。
  const template = fs.readFileSync(templatePath, "utf-8");
  const bundle = require("../dist/vue-ssr-server-bundle.json");
  // 客户端清单是可选的，但它允许渲染器
  // 自动推断预加载/预取链接并直接添加 <script>
  // 渲染期间使用的任何异步块的标签，避免瀑布请求。
  const clientManifest = require("../dist/vue-ssr-client-manifest.json");
  renderer = createRenderer(bundle, {
    template,
    clientManifest,
  });
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and create a new renderer on bundle / index template update.
  readyPromise = require("./setup-dev-server")(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options);
    }
  );
}

// 静态资源服务
const serve = (path, cache) =>
  express.static(resolve(path), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
  });

app.use(compression({ threshold: 0 }));
app.use(favicon(resolve("../public/favicon.ico")));
app.use("/dist", serve("../dist", true));

// 请求渲染函数
function render(req, res) {
  const s = Date.now();

  res.setHeader("Content-Type", "text/html");

  const handleError = (err) => {
    if (err.url) {
      res.redirect(err.url);
    } else if (err.code === 404) {
      res.status(404).send("404 | Page Not Found");
    } else {
      // Render Error Page or Redirect
      res.status(500).send("500 | Internal Server Error");
      console.error(`error during render : ${req.url}`);
      console.error(err.stack);
    }
  };

  const context = {
    title: "Vue服务端渲染", // default title
    url: req.url,
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err);
    }
    res.send(html);
    if (!isProd) {
      console.log(req.url);
      console.log(`请求用时: ${Date.now() - s}ms`);
    }
  });
}

app.get(
  "*",
  isProd
    ? render
    : (req, res) => {
        readyPromise.then(() => render(req, res));
      }
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
```

3. 创建服务端渲染 html 模板文件，`/server/index.template.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{ title }}</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimal-ui"
    />
  </head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>
```

4. 运行服务`node server`

> 访问该服务页面，就可以看到完成了服务端渲染 
> 
> 注意: `/server/index.js` 中的开发环境需要后续第四步配置

## 第四步 开发环境配置

开发环境，不能每次都打包`npm run build`，然后再运行`node server`，所以热更新很重要

1. 安装依赖

```bash
# memory-fs 内存读写
# chokidar 监听文件变化
# webpack-hot-middleware 热更新中间件
yarn add -D chokidar memory-fs webpack-hot-middleware
```

2. 增加`/src/setup-dev-server.js`文件

```js
const fs = require("fs");
const path = require("path");
const MFS = require("memory-fs");
const webpack = require("webpack");
const chokidar = require("chokidar");
const WebpackBar = require("webpackbar");

// 获取webpack.client.config
function getCilentWebpackConfig() {
  // 置空
  process.VUE_CLI_SERVICE = null;
  // 设置环境变量
  process.env.TARGET_ENV = "web";
  const configCilent = require("@vue/cli-service/webpack.config.js");
  return configCilent;
}
const clientConfig = getCilentWebpackConfig();

// 获取webpack.server.config
function getServerWebpackConfig() {
  // 删除reuqire缓存
  delete require.cache[require.resolve("@vue/cli-service/webpack.config.js")];
  delete require.cache[
    require.resolve(path.resolve(__dirname, "../vue.config.js"))
  ];
  // 置空
  process.VUE_CLI_SERVICE = null;
  // 设置环境变量
  process.env.TARGET_ENV = "node";
  const configServer = require("@vue/cli-service/webpack.config.js");
  return configServer;
}
const serverConfig = getServerWebpackConfig();

// 读取文件
const readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientConfig.output.path, file), "utf-8");
  } catch (e) {
    console.log(e);
  }
};

module.exports = function setupDevServer(app, templatePath, cb) {
  let bundle;
  let template;
  let clientManifest;

  let ready;
  const readyPromise = new Promise((r) => {
    ready = r;
  });
  const update = () => {
    if (bundle && clientManifest) {
      ready();
      cb(bundle, {
        template,
        clientManifest,
      });
    }
  };

  // read template from disk and watch
  template = fs.readFileSync(templatePath, "utf-8");
  chokidar.watch(templatePath).on("change", () => {
    template = fs.readFileSync(templatePath, "utf-8");
    console.log("index.html template updated.");
    update();
  });

  // modify client config to work with hot middleware
  clientConfig.entry = ["webpack-hot-middleware/client", clientConfig.entry];
  clientConfig.output.filename = "[name].js";
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackBar({
      name: "client",
      color: "#85d", // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    })
  );

  // dev middleware
  const clientCompiler = webpack(clientConfig);
  const devMiddleware = require("webpack-dev-middleware")(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
  });
  app.use(devMiddleware);
  // TypeError: clientCompiler.plugin is not a function
  // webpack 5 删除了clientCompiler.plugin
  // clientCompiler.plugin("done", (stats) => {
  // stats = stats.toJson();
  // stats.errors.forEach((err) => console.error(err));
  // stats.warnings.forEach((err) => console.warn(err));
  // if (stats.errors.length) return;
  // clientManifest = JSON.parse(
  //   readFile(devMiddleware.fileSystem, "vue-ssr-client-manifest.json")
  // );
  //
  // update();
  // });
  clientCompiler.hooks.done.tap(
    { name: "get-vue-ssr-client-manifest" },
    function (stats) {
      stats = stats.toJson();
      stats.errors.forEach((err) => console.error(err));
      stats.warnings.forEach((err) => console.warn(err));
      if (stats.errors.length) return;
      clientManifest = JSON.parse(
        readFile(
          devMiddleware.context.outputFileSystem,
          "vue-ssr-client-manifest.json"
        )
      );

      update();
    }
  );

  // hot middleware
  app.use(
    require("webpack-hot-middleware")(clientCompiler, {
      heartbeat: 5000,
      log: false,
    })
  );

  // watch and update server renderer

  serverConfig.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackBar({
      name: "server",
      color: "#2c3", // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    })
  );

  const serverCompiler = webpack(serverConfig);

  const mfs = new MFS();
  serverCompiler.outputFileSystem = mfs;

  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err;
    stats = stats.toJson();
    if (stats.errors.length) return;
    // read bundle generated by vue-ssr-webpack-plugin
    bundle = JSON.parse(readFile(mfs, "vue-ssr-server-bundle.json"));
    update();
  });

  return readyPromise;
};
```

3. 配置启动命令`npm run dev` \ `npm run start

```json
"scripts": {
    "dev": "node server",
    "start": "cross-env NODE_ENV=production node server",
  },
```

## 最后

通过以上步骤，即可完成 vue 客户端应用向服务端渲染应用改造

也可直接参考完整示例：https://github.com/souant/vue-ssr
