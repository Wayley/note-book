# Gitbook

> This is the notes collection of usage in Gitbook

## Table of Contents

1. [安装 Gitbook](#install)
2. [初始化书籍](#init)
3. [安装依赖](#install_dependencies)
4. [预览书籍](#serve)
5. [构建书籍](#build)
6. [生成 PDF 格式的电子书](#pdf)
7. [生成 epub 格式的电子书](#epub)
8. [生成 mobi 格式的电子书](#mobi)

## Contents

<div name="install" id="install"></div>

### 安装 Gitbook

```bash
$ npm install gitbook-cli -g
```

<div name="init" id="init"></div>

### 初始化书籍

```bash
$ gitbook init
```

<div name="install_dependencies" id="install_dependencies"></div>

### 安装依赖

```bash
$ gitbook install
```

<div name="serve" id="serve"></div>

### 预览书籍

```bash
$ gitbook serve [--port] [port]
# 默认port 4000
```

<div name="build" id="build"></div>

### 构建书籍

```bash
$ gitbook build [bookpath] [output]
# 默认output 是_book目录
```

<div name="pdf" id="pdf"></div>

### 生成 PDF 格式的电子书

```bash
$ gitbook pdf file-path
# e.g  gitbook pdf ./el-book/bookname.pdf
```

<div name="epub" id="epub"></div>

### 生成 epub 格式的电子书

```bash
$ gitbook epub file-path
# e.g  gitbook epub ./el-book/bookname.epub
```

<div name="mobi" id="mobi"></div>

### 生成 mobi 格式的电子书

```bash
$ gitbook mobi file-path
# e.g  gitbook mobi ./el-book/bookname.mobi
```
