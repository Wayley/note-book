# Getting Started

本案例以`create-react-app`官方提供的 Cli 工具创建一个 react 应用

## 初始化

使用 create-react-app 创建 app

开始之前请先安装`node`或`yarn`,如果想使用`npx`,则要求安装的 npm 版本 5.2 以上

```shell
$ yarn create react-app xx-app
# or
$ npx create-react-app xx-app

```

```shell
$ cd xx-app && yarn start
```

## 环境配置

在 start(即`development`模式)、test(即`test`模式)、build(即`production`模式)等不同 mode 下，指定不同的环境变量配置或文件。

- react-scripts

  `create-react-app`这个 CLI 工具默认提供`react-scripts`(1.0.0 或更高版本)

  - `.env`: Default.
  - `.env.local`: Local overrides. This file is loaded for all environments except test.
  - `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
  - `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

  ```json
   /* package.json */
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```

  Files on the left have more priority than files on the right:

  - `yarn start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
  - `yarn build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
  - `yarn test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

- wing-dotenv

  `wing-dotenv`可以指定加载环境配置文件, 命令格式:`wing-dotenv -e .env.xxx react-scripts start/build/test`. 然后`.env.xxx`拥有最高权重。

  使用场景:

  1. 在`development`或者`test`环境下, 要分别允许或测试不同配置下的效果,那么就可以指定对应的环境配置文件.
  2. 在`production`环境下，需要打包两份分别部署到 aliyun 和 aws 服务器上,那么就可以使用下面的命令对应加载`.env.production.aliyun`、`.env.production.aws`

  Files on the left have more priority than files on the right:

  ```json
  /* package.json */
  "scripts": {
    // `.env.development.local`, `.env.local`, `.env.development`, `.env`
    "start": "react-scripts start",

    // `.env.development.c1`, `.env.development.local`, `.env.local`, `.env.development`, `.env`
    "start:c1": "wing-dotenv -e .env.development.c1 react-scripts start",

    // `.env.production.local`, `.env.local`, `.env.production`, `.env`
    "build": "react-scripts build",

    // `.env.production.aliyun`, `.env.production.local`, `.env.local`, `.env.production`, `.env`
    "build:aliyun": "wing-dotenv -e .env.production.aliyun react-scripts build",

    // `.env.production.aws`, `.env.production.local`, `.env.local`, `.env.production`, `.env`
    "build:aws": "wing-dotenv -e .env.production.aws react-scripts build",

    // `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)
    "test": "react-scripts test",

    // `.env.test.c2`, `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)
    "test:c2": "wing-dotenv -e .env.test.c2 react-scripts test",
  },
  ```

<table>
<caption>不同脚本工具命令所加载的配置列表情况</caption>
<tr>
  <th>tools</th>
  <th>script</th>
  <th>command</th>
  <th>mode</th>
  <th>loaded envs
  <br>
  <span style="font-weight: 500; color: red;">(priority decreases)</span>
  </th>
</tr>
<!-- react-scripts -->
<tr>
  <td rowspan="3"><b>react-scripts</b></td>
  <td>yarn start</td>
  <td>react-scripts start</td>
  <td>development</td>
  <td>
    .env.development.local<br>
    .env.local<br>
    .env.development<br>
    .env<br>
  </td>
</tr>
<tr>
  <td>yarn build</td>
  <td>react-scripts build</td>
  <td>production</td>
  <td>
    .env.production.local<br>
    .env.local<br>
    .env.production<br>
    .env<br>
  </td>
</tr>
<tr>
  <td>yarn test</td>
  <td>react-scripts test</td>
  <td>test</td>
  <td>
    .env.test.local<br>
    .env.test<br>
    .env<br>
    <span style="color: red;">(Notice: .env.local is missing)</span>
</tr>
<tr>
  <td></td>
</tr>
<!-- wing-dotenv -->
<tr>
  <td rowspan="7"><b>wing-dotenv</b></td>
  <td>yarn start</td>
  <td>react-scripts start</td>
  <td rowspan="2">development</td>
  <td>
    .env.development.local<br>
    .env.local<br>
    .env.development<br>
    .en<br>
  </td>
</tr>
<tr>
  <td>yarn start:c1</td>
  <td>wing-dotenv -e .env.development.c1 react-scripts start</td>
  <td>
    .env.development.c1<br>
    .env.development.local<br>
    .env.local<br>
    .env.development<br>
    .en<br>
  </td>
</tr>
<tr>
  <td>yarn build</td>
  <td>react-scripts build</td>
  <td rowspan="3">production</td>
  <td>
    .env.production.local<br>
    .env.local<br>
    .env.production<br>
    .env<br>
  </td>
</tr>
<tr>
  <td>yarn build:aliyun</td>
  <td>wing-dotenv -e .env.production.aliyun react-scripts build</td>
  <td>
    .env.production.aliyun<br>
    .env.production.local<br>
    .env.local<br>
    .env.production<br>
    .env<br>
  </td>
</tr>
<tr>
  <td>yarn build:aws</td>
  <td>wing-dotenv -e .env.production.aws react-scripts build</td>
  <td>
    .env.production.aws<br>
    .env.production.local<br>
    .env.local<br>
    .env.production<br>
    .env<br>
  </td>
</tr>
<tr>
  <td>yarn test</td>
  <td>react-scripts test</td>
  <td rowspan="2">test</td>
  <td>
    .env.test.local<br>
    .env.test<br>
    .env<br>
    <span style="color: red;">(Notice: .env.local is missing)</span>
</tr>
<tr>
  <td>yarn test:c2</td>
  <td>wing-dotenv -e .env.test.c2 react-scripts test</td>
  <td>
    .env.test.c2<br>
    .env.test.local<br>
    .env.test<br>
    .env<br>
    <span style="color: red;">(Notice: .env.local is missing)</span>
</tr>
</table>

## 使用 craco

CRACO(Create React App Configuration Override)

使用 [craco](https://github.com/gsoft-inc/craco) 来重写 create-react-app 的配置

- install

  ```shell
  $ yarn add @craco/craco -D
  #or
  $ npm install @craco/craco --save-dev
  ```

- add craco configs

  在项目根目录下添加以下任意一种文件配置, 如果存在多个文件,那么 craco 只会取一种文件,优先级如下:

  1. ` craco.config.js`
  2. `.cracorc.js`
  3. `.cracorc`

- update script

  ```json
  /* package.json */
  "scripts": {
    -   "start": "react-scripts start",
    +   "start": "craco start",
    -   "build": "react-scripts build",
    +   "build": "craco build",
    -   "test": "react-scripts test",
    +   "test": "craco test",
  }

  ```

<b>Tips:</b> Setting a Custom Location for `craco.config.js`

Both options support a `relative` or an `absolute` path

1. package.json (Recommended)

You can change the location of the craco.config.js file by specifying a value for `cracoConfig` in your package.json file.

```json
/* package.json */

{
  "cracoConfig": "config/craco-config-with-custom-name.js"
}
```

2. CLI (For backward compatibility)

You can also change the location of the craco.config.js file by specifying the`--config` CLI option. This option doesn't support Babel with Jest

```json
/* package.json */
{
  "scripts": {
    "start": "craco start --config config/craco-config-with-custom-name.js"
  }
}
```

## 修改打包构建目录

> 默认情况下, 运行`npm build`会生成`build`目录.

### 修改构建目录为`dist`

修改`craco.config.js`中的`webpack`配置

- Step 01 指定`appBuild`为`dist`
- Step 02 修改`output.path`为`dist`

```js
// craco.config.js
const path = require("path");
module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      paths.appBuild = "dist"; // step 1

      config.output = {
        ...config.output,
        path: path.resolve(__dirname, "dist"), // step 2
      };
      return config;
    },
  },
  // other configs
};
```
