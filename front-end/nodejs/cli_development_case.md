<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2021-05-14 10:04:38
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2021-06-28 18:35:06
 * @Description:
-->

# CLI 开发案例

> 本例以`FCFE(Fih Cloud Front End)`为例,介绍前端脚手架工具搭建步骤

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting_started)
3. [Building Package](#building_package)

## Contents

<a name="introduction" id="introduction">

### Introduction

- 工程初始化

  - `npm init`
  - 设置`private`为`true`
  - 新增`README.md`
  - `git init`和新增`.gitignore`

    ```
    .DS_Store
    node_modules
    */node_modules

    # local env files
    .env.local
    .env.*.local

    # Log files
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    # Editor directories and files
    .idea
    .vscode
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw*
    ```

- 初识`nodejs`

  ```js
  const http = require("http");
  const hostname = "127.0.0.1";
  const port = 3003;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("HELLO FCFE");
  });
  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
  });
  ```

- 创建脚本工具目录`src/bin`
- 使用`npm link`

<a name="getting_started" id="getting_started">

### Getting Started

#### 指定脚本解析器/引擎版本

- 向`package.json`中添加`engines`属性

  ```json
  // package.json
  {
    "engines": {
      "node": "^10.12.0 || ^12.0.0 || >= 14.0.0"
    }
  }
  ```

- check node version

```js
const expectedVersion = require("../../package.json").engines;
```

<a name="building_package" id="building_package">

### Building Package
