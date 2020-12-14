# Vue

## Vue-Cli

### cli 项目使用`Less`

- 直接安装`less`、`less-loader`,然后就可以在`.vue`文件中直接使用`Less`

  ```sh
  $ yarn add less less-loader --dev
  ```

- 如果想自动化导入全局的 Less 定义(如: 变量、混入等),可以使用[`vue-cli-plugin-style-resources-loader`](https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader)

  ```sh
  $ vue add style-resources-loader
  ```

  ```js
  // vue.config.js

  const path = require("path");
  module.exports = {
    // ...
    pluginOptions: {
      "style-resources-loader": {
        preProcessor: "less", // One of: sass, scss, stylus, less
        patterns: [path.resolve(__dirname, "./src/styles/common/*.less")],
      },
    },
  };
  ```

- 多环境构建打包

  > 例如: 我们项目需要打包构建发布到多个服务器中(如: server01, server02, ...),使用`--mode`指定环境模式

  ```
    # .env file
    VUE_APP_PAGE_SIZE = 15
  ```

  ```
    # .env.development file
    VUE_APP_API = 'http://dev.api.com'
  ```

  ```
   # .env.production file
   VUE_APP_API = 'http://prod.api.com'
  ```

  ```
    # .env.server01 file
    # 注意这里要致命`NODE_ENV`为`production`, 不然build出来的代码没有压缩和混淆等之类的处理
    NODE_ENV = production

    VUE_APP_API = 'http://s1.api.com'

    # 这里的 `VUE_APP_PAGE_SIZE`会覆盖`.env`中的值, 特定模式准备的环境文件 (例如 .env.server01) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。
    VUE_APP_PAGE_SIZE = 20
  ```

  ```
    # .env.server02 file
    # 注意这里要致命`NODE_ENV`为`production`, 不然build出来的代码没有压缩和混淆等之类的处理
    NODE_ENV = production

    VUE_APP_API = 'http://s2.api.com'

    # 这里的 `VUE_APP_PAGE_SIZE`会覆盖`.env`中的值, 特定模式准备的环境文件 (例如 .env.server02) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。
    VUE_APP_PAGE_SIZE = 10

  ```

  ```json
  // package.json
  // ...
  "scripts": {
    "serve": "vue-cli-service serve --open",// 默认: development; 会加载`.env`、`.env.development`这两个配置文件
    "build": "vue-cli-service build",// 默认: production; 会加载`.env`、`.env.production`这两个配置文件
    "build:s1": "vue-cli-service build --mode server01",// 指定为: server01; 会加载`.env`、`.env.server01`这两个配置文件
    "build:s2": "vue-cli-service build --mode server02",// 指定为: server02; 会加载`.env`、`.env.server02`这两个配置文件
    "lint": "vue-cli-service lint"
  },
  ```
