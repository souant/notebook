# webpack 源码解析

## 从执行命令开始

```
// 运行构建命令
npm run build
```

执行 webpack, /node_modules/.bin/webpack 可执行脚本

`webpack -c ./webpack.config.js`

会使用 `node`命令执行 `/node_modules/webpack/bin/webpack.js`

```
#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../webpack/bin/webpack.js" "$@"
  ret=$?
else
  node  "$basedir/../webpack/bin/webpack.js" "$@"
  ret=$?
fi
exit $ret

```

## 核心执行流程

`webpack.js`中判断 `webpack-cli`库的存在，若存在则执行 `webpack-cli`中的 `run()`

1. webpack.js 判断 webpack-cli 库

   ```js
   const cli = {
     name: "webpack-cli",
     package: "webpack-cli",
     binName: "webpack-cli",
     installed: isInstalled("webpack-cli"),
     url: "https://github.com/webpack/webpack-cli",
   };
   if (!cli.installed) {
     // 未找到cli，处理
   } else {
     runCli(cli);
   }
   ```
2. runCli()加载 webpack-cli 库并执行/webpack-cli/bin/cli.js，再执行/webpack-cli/lib/bootstrap.js，创建 webpack-cli 对象并运行 run()方法

   ```js
   "use strict";
   Object.defineProperty(exports, "__esModule", { value: true });
   // eslint-disable-next-line @typescript-eslint/no-var-requires
   const WebpackCLI = require("./webpack-cli");
   const runCLI = async (args) => {
     // Create a new instance of the CLI object
     const cli = new WebpackCLI();
     try {
       await cli.run(args);
     } catch (error) {
       cli.logger.error(error);
       process.exit(2);
     }
   };
   module.exports = runCLI;
   ```
3. webpack-cli run()方法会解析各种 option，执行加载 webpack 库 `this.loadWebpack()`，执行 `runWebpack()`，最终会执行 `createCompiler()`方法

   ```js
   async run(args, parseOptions) {
   	// ...
   	const loadCommandByName = async (commandName, allowToInstall = false) => {
   	  // ...
   		if (isBuildCommandUsed || isWatchCommandUsed) {
         await this.makeCommand(isBuildCommandUsed ? buildCommandOptions : watchCommandOptions, async () => {
           this.webpack = await this.loadWebpack();
           return isWatchCommandUsed
             ? this.getBuiltInOptions().filter((option) => option.name !== "watch")
             : this.getBuiltInOptions();
         }, async (entries, options) => {
           if (entries.length > 0) {
             options.entry = [...entries, ...(options.entry || [])];
           }
           await this.runWebpack(options, isWatchCommandUsed);
         });
       }
   	  // ...
   	}
   	// ...
   }

   async runWebpack(options, isWatchCommand) {
   	// 其他操作
   	// ...
   	compiler = await this.createCompiler(options, callback);
   	// ...
   }


   ```
4. `runWebpack()` 会执行 webpack 包，/lib/webpack.js，是一个工厂函数 webpack，创建 webpack 对象并执行 run()

   ```js
   const webpack = (options, callback) => {
   	const create = () => {
   		...
   	}
   	if (callback) {
   		try {
   			const { compiler, watch, watchOptions } = create();
   			if (watch) {
   				compiler.watch(watchOptions, callback);
   			} else {
   				compiler.run((err, stats) => {
   					compiler.close(err2 => {
   						callback(err || err2, stats);
   					});
   				});
   			}
   			return compiler;
   		} catch (err) {
   			process.nextTick(() => callback(err));
   			return null;
   		}
   	} else {
   		...
   	}
   }
   ```
5. createCompiler()创建 Compiler 对象时，同步加载 options 中的插件，再加载 webpack 内置 options 插件

   ```js
   const createCompiler = (rawOptions) => {
     const options = getNormalizedWebpackOptions(rawOptions);
     applyWebpackOptionsBaseDefaults(options);
     const compiler = new Compiler(options.context, options);
     new NodeEnvironmentPlugin({
       infrastructureLogging: options.infrastructureLogging,
     }).apply(compiler);
     if (Array.isArray(options.plugins)) {
       for (const plugin of options.plugins) {
         if (typeof plugin === "function") {
           plugin.call(compiler, compiler);
         } else {
           plugin.apply(compiler);
         }
       }
     }
     applyWebpackOptionsDefaults(options);
     compiler.hooks.environment.call();
     compiler.hooks.afterEnvironment.call();
     new WebpackOptionsApply().process(options, compiler);
     compiler.hooks.initialize.call();
     return compiler;
   };
   ```
6. Compiler 对象执行 run()方法，最终再执行 compile()方法，创建 Compilation 对象

   ```js
   compile(callback) {
     const params = this.newCompilationParams();
     this.hooks.beforeCompile.callAsync(params, err => {
       if (err) return callback(err);

       this.hooks.compile.call(params);

       const compilation = this.newCompilation(params);

       const logger = compilation.getLogger("webpack.Compiler");

       logger.time("make hook");
       this.hooks.make.callAsync(compilation, err => {
         logger.timeEnd("make hook");
         if (err) return callback(err);

         logger.time("finish make hook");
         this.hooks.finishMake.callAsync(compilation, err => {
           logger.timeEnd("finish make hook");
           if (err) return callback(err);

           process.nextTick(() => {
             logger.time("finish compilation");
             compilation.finish(err => {
               logger.timeEnd("finish compilation");
               if (err) return callback(err);

               logger.time("seal compilation");
               compilation.seal(err => {
                 logger.timeEnd("seal compilation");
                 if (err) return callback(err);

                 logger.time("afterCompile hook");
                 this.hooks.afterCompile.callAsync(compilation, err => {
                   logger.timeEnd("afterCompile hook");
                   if (err) return callback(err);

                   return callback(null, compilation);
                 });
               });
             });
           });
         });
       });
     });
   }
   ```
7. compile()方法会调用 webpack 核心 `tabable`去执行 webpack 所有操作

## compile执行阶段

beforeCompile()  -> compile() -> 创建Compilation对象 -> make() -> finishMake() -> compilation.finish() -> compilation.seal() -> afterComplie()
