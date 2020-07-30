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
