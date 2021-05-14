# package.json 解读

> `package.json`中的属性解读, 详细介绍见[官方文档](https://docs.npmjs.com/cli/v7/configuring-npm)

## Table of Contents

1. [name](#name)
2. [version](#version)
3. [dependencies/devDependencies](#dependency)
4. [engines](#engines)

<a name="name" id="name">

### Name

<a name="version" id="version">

### Version

<a name="dependency" id="dependency">

### dependencies / devDependencies

- devDependencies 开发/构建依赖
- dependencies 项目/业务依赖

```json
// package.json
{
  // other properties

  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0"
  },
  "devDependencies": {
    "terser-webpack-plugin": "^5.1.1",
    "webpack": "^5.37.0",
    "webpack-cli": "^4.7.0",
    "webpack-shebang-plugin": "^1.1.4"
  }
}
```

### engines

```json
// package.json
{
  // other properties

  "engines": {
    "node": "^10.12.0 || ^12.0.0 || >= 14.0.0"
  }
}
```
