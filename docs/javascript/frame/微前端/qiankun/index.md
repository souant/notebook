# 主应用

1. 安装乾坤

   ```sh
   yarn add qiankun
   ```
2. 在主应用注册微应用

   ```js
   import { registerMicroApps, start } from 'qiankun';

   registerMicroApps([
     {
       name: 'react app', // app name registered
       entry: '//localhost:7100',
       container: '#yourContainer',
       activeRule: '/yourActiveRule',
     },
     {
       name: 'vue app',
       entry: { scripts: ['//localhost:7100/main.js'] },
       container: '#yourContainer2',
       activeRule: '/yourActiveRule2',
     },
   ]);

   start();
   ```
3. 手动加载微应用

   ```js
   import { loadMicroApp } from 'qiankun';

   loadMicroApp({
     name: 'app',
     entry: '//localhost:7100',
     container: '#yourContainer',
   });
   ```


# vue微应用

1. 微应用配置打包工具

   ```js
   const packageName = require('./package.json').name

   module.exports = {
     configureWebpack: {
       // 更改webpack打包输出方式
       // 适配qiankun微应用加载
       output: {
         library: `${packageName}-[name]`,
         libraryTarget: 'umd',
         jsonpFunction: `webpackJsonp_${packageName}`
       }
     }
   }
   ```


> ERROR  ValidationError: Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
>          - configuration.output has an unknown property 'jsonpFunction'. These properties are valid:
>
>
> 在 webpack 4 中，多个 webpack 运行时可能会在同一个 HTML 页面上发生冲突，因为它们使用同一个全局变量进行代码块加载。为了解决这个问题，需要为 output.jsonpFunction 配置提供一个自定义的名称。
>
> Webpack 5 确实会从 package.json name 中自动推断出一个唯一的构建名称，并将其作为 output.uniqueName 的默认值
> webpack 5中已将 `output.jsonpFunction` 更名为 `output.chunkLoadingGlobal`

2. 配置微应用

   1. 在 `src` 目录新增 `public-path.js`：

      ```js
      if (window.__POWERED_BY_QIANKUN__) {
        __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
      }
      ```
   2. 入口文件 `main.js` 修改，为了避免根 id `#app` 与其他的 DOM 冲突，需要限制查找范围。

      ```js
      import './public-path';
      import Vue from 'vue';
      import VueRouter from 'vue-router';
      import App from './App.vue';
      import routes from './router';
      import store from './store';

      Vue.config.productionTip = false;

      let router = null;
      let instance = null;
      function render(props = {}) {
        const { container } = props;
        router = new VueRouter({
          base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
          mode: 'history',
          routes,
        });

        instance = new Vue({
          router,
          store,
          render: (h) => h(App),
        }).$mount(container ? container.querySelector('#app') : '#app');
      }

      // 独立运行时
      if (!window.__POWERED_BY_QIANKUN__) {
        render();
      }

      export async function bootstrap() {
        console.log('[vue] vue app bootstraped');
      }
      export async function mount(props) {
        console.log('[vue] props from main framework', props);
        render(props);
      }
      export async function unmount() {
        instance.$destroy();
        instance.$el.innerHTML = '';
        instance = null;
        router = null;
      }
      ```
