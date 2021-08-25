<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: FOXCONN(-ACKN)
 * @Date: 2021-08-24 16:33:48
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2021-08-25 13:54:27
 * @Description:
-->

# Getting Started

本案例以`create-react-app`官方提供的 Cli 工具创建一个 react 应用

## 初始化

开始之前请先安装`node`或`yarn`,如果想使用`npx`,则要求安装的 npm 版本 5.2 以上

```bash
$ yarn create react-app xx-app
# or
$ npx create-react-app xx-app

```

```bash
$ cd xx-app && yarn start
```

## 添加打包构建配置

在 start(即`development`模式)、test(即`test`模式)、build(即`production`模式)等下，指定不同的环境变量配置。

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
