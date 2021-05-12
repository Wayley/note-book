# Webpack

## 基础使用

### 安装 webpack 依赖

```bash
$ npm install webpack webpack-cli --save-dev
# or
$ yarn add webpack webpack-cli -D
```

### 指定 webpack 配置

1. 使用 cli 参数

   > 详见[Webpack Command Line Interface](https://webpack.js.org/api/cli/)

2. 使用配置文件`webpack.config.*.js`

   - 默认情况下 `npm run webpck` 命令会加载 `webpack.config.js` 配置文件
   - 也可以指定配置文件。如：`npm run webpack --config webpack.config.pord.js`

### 添加 webpack 配置内容

```js
// webpack.config.*.js
const path = require("path");
const { NODE_ENV } = process.env;
module.exports = {
  mode: NODE_ENV == "production" ? "production" : "development", // 可选值：development、production和none
  entry: {
    index: "src/index.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output directory before emit.
  },
};
```

### 常见的配置

1. [清除所有注释](#no-comment)
2. [无法识别指定加载器的文件的问题](#no-comment)

#### 清除所有注释

<a name="no-comment" id="no-comment">

使用`terser-webpack-plugin`覆盖内置的 terser

```js
// webpack.config.*.js
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  // other configs

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
```

#### 无法识别指定加载器的文件的问题

> 例如无法打包以`#!/usr/bin/env node`开头的 js 文件

<a name="no-comment" id="no-comment">

1. 使用 `webpack` 的 `BannerPlugin`

   ```js
   // webpack.config.*.js
   const webpack = require("webpack");
   module.exports = {
     // other configs

     plugins: [
       new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
     ],
   };
   ```

2. 使用`webpack-shebang-plugin`

   ```js
   // webpack.config.*.js
   const ShebangPlugin = require("webpack-shebang-plugin");
   module.exports = {
     // other configs

     plugins: [new ShebangPlugin()],
   };
   ```
