# 前端项目优化

## 1.Table of Content

- [首屏加载时间优化](#first_screen_loading)
- [静态资源文件大小优化](#resource_filesize)
- [http 请求资源优化](#http_resouce)
- [静态资源按需加载](#resource_load_on_demand)
- [组件化](#with_component)

### 1.1 首屏加载时间优化

- 拆分首屏项目代码和业务逻辑,只加载首屏应用代码

- 使用 CDN 加载第三方库 而非使用 `npm install` 到本地

### 1.2 静态资源文件大小优化

- 代码混淆压缩

  ```js
  //webpack.config.js

  const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

  module.exports = {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i,
          include: /\/includes/,
          excluce: /\/excludes/,
          chunkFilter: (chunk) => {
            // `vendor` 模块不压缩
            if (chunk.name === "vendor") {
              return false;
            }
            return true;
          },
          cache: false,
          parallel: true, // 开启多进程并行运行
          uglifyOptions: {
            warnings: false,
            parse: {},
            // 删除debugger和console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            ie8: false,
          },
        }),
      ],
    },
  };
  ```

- 开启 Gzip

  ```js
      const compressionWebpackPlugin = require('compression-webpack-plugin')
      chainWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('compression').use(compressionWebpackPlugin, [{
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: true
            }])
        }
      }
  ```

### 1.3http 请求资源优化

### 1.4 静态资源按需加载

> 例如我们要使用 `iview` 的 `Button` 组件,不建议全量加载,

```js
// 不建议使用
import ViewUI from "iview";
const Button = ViewUI.Button;
```

```js
// 建议使用按需加载
import { Button } from "iview";
```

### 1.5 组件化

> 使用组件化, 纯函数组件等提供代码复用性;
