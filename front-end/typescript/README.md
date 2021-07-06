# TypeScript

## 安装 TypeScript

两种主要方式获取 TypeScript 工具

- 安装 VS 的 TypeScript 插件
- 通过`npm` 安装

使用`npm`安装

```bash
$ npm install -g typescript
# or
$ yarn global add typescript
```

## 将 TS 编译成 JS

- 直接编译 TS 文件

  ```shell
  $ tsc hello.ts
  # hello.ts ===> hello.js
  ```

- 使用`tsconfig.json`

  1.  在项目根目录下创建`tsconfig.json`配置文件

  ```json
  // 项目根目录下 tsconfig.json
  {
    "compilerOptions": {
      "outDir": "./built", // 生成的所有文件放在built目录下
      "allowJs": true, // 接受JavaScript做为输入
      "target": "es5" // 将JavaScript代码降级到低版本比如ECMAScript 5
    },
    "include": ["./src/**/*"] // 读取所有可识别的src目录下的文件
  }
  ```

  2.  然后使用`tsc`命令，会自动查找配置文件`tsconfig.json`

  ```shell
  $ tsc
  ```
