# Gitbook

> This is the notes collection of usage in Gitbook

## Table of Contents

1. [安装 Gitbook](#install)
2. [初始化书籍](#init)
3. [预览书籍](#serve)
4. [构建书籍](#build)
5. [生成 PDF 格式的电子书](#pdf)
6. [生成 epub 格式的电子书](#epub)
7. [生成 mobi 格式的电子书](#mobi)

## Contents

### 安装 Gitbook

<a name="install" id="install">

```bash
$ npm install gitbook-cli -g
```

### 初始化书籍

<a name="init" id="init">

```bash
$ gitbook init
```

### 预览书籍

<a name="serve" id="serve">

```bash
$ gitbook serve [--port] [port]
# 默认port 4000
```

### 构建书籍

<a name="build" id="build">

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

### 生成 epub 格式的电子书

<a name="epub" id="epub">

```bash
$ gitbook epub file-path
# e.g  gitbook epub ./el-book/bookname.epub
```

### 生成 mobi 格式的电子书

<a name="mobi" id="mobi">

```bash
$ gitbook mobi file-path
# e.g  gitbook mobi ./el-book/bookname.mobi
```
