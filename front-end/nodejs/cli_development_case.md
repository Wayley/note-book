<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2021-05-14 10:04:38
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2021-06-29 09:09:43
 * @Description:
-->

# CLI 开发案例

> 本例以`FCFE(Fih Cloud Front End)`为例,介绍前端脚手架工具搭建步骤

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting_started)
3. [Building Package](#building_package)
4. [Usage]](#usage)

## Contents

<a name="introduction" id="introduction">

### Introduction

> 工程初始化与初识 nodejs

- 工程初始化`npm init`, 设置`private`,新增`README.md`,新增`.gitignore`
- 初识`nodejs`
- 创建脚本工具目录`src/bin`
- 使用`link`

<a name="getting_started" id="getting_started">

### Getting Started

- 添加`node engines`,

  ```json
  {
    "node": "^10.12.0 || ^12.0.0 || >= 14.0.0"
  }
  ```

- check node version

  ```js
  // satisfies chalk
  const { satisfies } = require("semver");
  const chalk = require("chalk");
  ```

- 添加`commander`

  ```js
  const program = require("commander");
  program.version(version).usage("<command> [options]");

  program.command("create <app-name>").action((appName) => {
    require("../lib/action/create")(appName);
  });
  program.command("plugin <plugin-name>").action((pluginName) => {
    console.log("plugin command is in development");
  });

  program.parse(process.argv);
  ```

- 添加`Actions`

  - `Create Action`
  - `Init Action`
  - `Plugin Action`

- Create Action

<a name="building_package" id="building_package">

### Building Package

> 工程打包

- 添加`webpack`、`webpack-cli`
- 添加插件`webpack-shebang-plugin`、`terser-webpack-plugin`
- externals

  ```js
  // webpack.config.js
  const path = require("path");
  const webpack = require("webpack");
  const TerserPlugin = require("terser-webpack-plugin");
  const ShebangPlugin = require("webpack-shebang-plugin");
  const {
    name,
    version,
    copyright,
    license,
    author,
    dependencies,
  } = require("./package.json");
  const AUTHOR = author.name || author;
  const banner =
    "/*!\n" +
    ` * ${name} v${version}\n` +
    ` * Copyright © ${copyright} 2017-${new Date().getFullYear()} ${AUTHOR}\n` +
    ` * Released under the ${license} License.\n` +
    " *\n" +
    ` */`;
  module.exports = (env, argv) => {
    const { EXCLUDE_EXTERNALS } = env;
    let config = {
      mode: "production",
      entry: {
        wing: "./src/bin/index.js",
      },
      output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
      },
      resolve: {
        alias: {},
      },
      plugins: [
        new ShebangPlugin(),
        new webpack.BannerPlugin({
          banner,
          raw: true,
          entryOnly: true,
        }),
      ],
      target: "node",
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              format: {},
            },
            extractComments: false,
          }),
        ],
      },
    };
    if (EXCLUDE_EXTERNALS && dependencies) {
      let externals = {};
      for (const key in dependencies) {
        if (Object.hasOwnProperty.call(dependencies, key)) {
          externals[key] = `commonjs2 ${key}`;
        }
      }
      config["externals"] = externals;
    }
    return config;
  };
  ```

<a name="usage" id="usage">

### Usage

> 脚手架使用

```shell
$ fcfe -h
# Usage: fcfe <command> [options]

# Options:
#   -V, --version         output the version number
#   -h, --help            display help for command

# Commands:
#   create <app-name>
#   init <app-name>
#   plugin <plugin-name>
#   help [command]        display help for command
```
