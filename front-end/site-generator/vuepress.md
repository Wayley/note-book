# Vuepress

## Table of Contents

1. [初识 VuePress](#acquaintance)
2. [demo](#demo)

## Contents

### 初识 VuePress

<a name="acquaintance" id="acquaintance">

> [VuePress 官网](https://vuepress.vuejs.org/)

- 单独尝试 VuePress
- 集成到现有项目
- 常见命令

  ```bash
  # 开始写作
  $ vuepress dev [path]

  # 构建静态html文件
  $ vuepress build [path]
  ```

### VuePress Demo

<a name="demo" id="demo">

#### VuePress 环境搭建

##### 安装 VuePress

- 全局安装

```bash
$ yarn global add vuepress # 或者: $ npm install -g vuepress
```

- 本地安装

```bash
$ yarn add -D vuepress # 或者: $ npm install -D vuepress
```

##### 创建 demo 项目目录

```bash
$ mkdir demo && cd demo/
```

##### 初始化项目

```bash
$ yarn init -y # 或者: $ npm init -y
```

##### 新建 docs 文件夹

docs 文件夹作为项目文档根目录

```bash
$ mkdir docs
```

##### 新建一个 markdown 文件到 docs

```bash
$ echo '# 欢迎来到新世界！' > docs/README.md
```

##### 写作文档(本地预览)

```bash
$ npx vuepress dev docs # 或者: $ vuepress dev docs
```

##### 生成静态 html 文件

```bash
$ npx vuepress build docs # 或者: $ vuepress build docs
```

#### 基本配置

> 开发自定义网站需要添加丰富的配置

##### 新建.vuepress 目录

> 在 docs 目录下新建.vuepress 目录, 用以存放与 VuePress 相关的文件

```bash
$ cd docs/ && mkdir .vuepress
```

##### 新建配置文件

> 新建配置文件`.vuepress/config.js`

```bash
$ cd .vuepress/ && touch config.js
```

`config.js`文件导出一个 JavaScript 对象:

```js
module.export = {};
```
