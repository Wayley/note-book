# 定制自己的 CLI

## 开发步骤

### 初始化项目

```bash
# 以`console-cli`为例
$ mkdir console-cli && cd console-cli && npm init
```

### 添加`bin`

> 在`package.json`文件中添加`bin`字段

```json
// package.json

{
  "name": "console-cli",
  // .
  // .
  // .
  "bin": {
    // "custom name": entry file path
    // 例如这里可以自定义工具名称,并指定入口文件路径
    "console-cli": "bin/index.js"
  }
}
```

### 工具功能实现

> 根据`package.json`中`bin`的设置,自己实现工具的功能,例如: `console-cli`工具只简单的实现打印`This is a console cli tool`这句话功能

```js
#!/usr/bin/env node
// `#!/usr/bin/node` 和 `#!/usr/bin/env node`都是告诉系统本文件的执行程序均为`node`。
// `#!/usr/bin/node`: 明确告诉系统node执行程序在`/usr/bin/node`路径上;
// `#!/usr/bin/env node`: 是告诉系统自己去环境中找node的执行程序;

console.log("This is a console cli tool");
```

## 使用 CLI

### 全局使用

#### 本地全局使用

> 在上面的项目根目录下执行`npm link`就会在本地全局环境中添加工具名称`console-cli`

```bash
$ npm link
```

> 在任意目录下执行`console-cli`,控制台就会打印`This is a console cli tool`

```bash
$ console-cli
# output: This is a console cli tool
```

#### npm 安装后全局使用

> 发布到`npm`后就可以使用`npm install -g console-cli`,然后就可以全局使用了

### 在项目中使用

> 为项目写一个 cli 工具,例如:

- 项目名称为`car-demo`
- `console-cli`工具在项目根目录下的`src/cli/console-cli/`下

```bash
# 在项目根目录下
# -D(--save-dev)  or  -S(--save)
$ npm i -D file:file:src/cli/console-cli/
# or
$ yarn add -D file:src/cli/console-cli/
```

则在`package.json`中的`devDependencies`(取决于`-D`还是`-S`)上新增`"console-cli": "file:src/cli/console-cli/",`

同时在`package.json`中的`scripts`上新增自己的脚本命令`"custom":"console-cli"`
