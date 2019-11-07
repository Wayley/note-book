This is the notes collection of usage in Gitbook

## Table of Contents

1. [安装 Gitbook](#install)
2. [初始化书籍](#init)
3. [预览书籍](#serve)
4. [构建书籍](#build)
5. [生成 PDF 格式的电子书](#pdf)
6. [生成 epub 格式的电子书](#epub)
7. [生成 mobi 格式的电子书](#mobi)

## Contents

<a name="install" id="install">

### 安装 Gitbook

```bash
$ npm install gitbook-cli -g
```

<a name="init" id="init">

### 初始化书籍

```bash
$ gitbook init
```

<a name="serve" id="serve">

### 预览书籍

```bash
$ gitbook serve [--port] [port]
# 默认port 4000
```

<a name="build" id="build">

### 构建书籍

```bash
$ gitbook build [bookpath] [output]
# 默认output 是_book目录
```

### 生成 PDF 格式的电子书

<a name="pdf" id="pdf">

```bash
$ gitbook pdf file-path
# e.g  gitbook pdf ./el-book/bookname.pdf
```

<a name="epub" id="epub">

### 生成 epub 格式的电子书

```bash
$ gitbook epub file-path
# e.g  gitbook epub ./el-book/bookname.epub
```

<a name="mobi" id="mobi">

### 生成 mobi 格式的电子书

```bash
$ gitbook mobi file-path
# e.g  gitbook mobi ./el-book/bookname.mobi
```
