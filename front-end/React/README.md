# React Note

the `react-demo` is created by `create-react-app` CLI tools.

## Notes

1. [关闭 source-map](#close-source-map)
2. [自定义指定配置文件](#custom-specified-config)

<a name="close-source-map" id="close-source-map">

### 关闭 source-map

- 在环境配置文件(如:`.env`,`.env.development`,`.env.test`,`.env.production`等)中添加内容`GENERATE_SOURCEMAP = false`; 该环境下关闭 source-map

<a name="custom-specified-config" id="custom-specified-config">

### 自定义指定配置文件

- 安装`dotenv-cli`

```shell
$ yarn add dotenv-cli --dev
```

- 添加`.env`、`.env.development`、`.env.test`、`.env.production`、`.env.server01`、`.env.server02`等配置文件.(自定义环境变量以`REACT_APP_`开头)

```bash

  # .env
  GENERATE_SOURCEMAP = false
  REACT_APP_PAGE_SIZE = 15

  # .env.development
  REACT_APP_API = 'http://dev.api.com'

  # .env.test
  REACT_APP_API = 'http://test.api.com'
  REACT_APP_PAGE_SIZE = 20

  # .env.production
  REACT_APP_API = 'http://prod.api.com'

  # .env.server01
  REACT_APP_API = 'http://server01.api.com'

  # .env.server02
  REACT_APP_API = 'http://server02.api.com'

```

- 修改 scripts

```json
{
  "start": "react-scripts start", // 默认加载`.env`和`.env.development`配置文件
  "start:server01": "dotenv -e .env.server01 react-scripts start", //运行到server01上: 加载`.env`和`.env.server01`配置文件
  "start:server02": "dotenv -e .env.server02 react-scripts start", //运行到server02上: 加载`.env`和`.env.server02`配置文件

  "build": "react-scripts build", // 默认加载`.env`和`.env.production`配置文件
  "build:server01": "dotenv -e .env.server01 react-scripts build", //构建到server01上: 加载`.env`和`.env.server01`配置文件
  "build:server02": "dotenv -e .env.server02 react-scripts build", //构建到server02上: 加载`.env`和`.env.server02`配置文件

  "test": "react-scripts test" // 默认加载`.env`和`.env.test`配置文件
}
```

- 页面中使用当前环境下的配置

```js
<div>
  <h2>REACT_APP_API: {process.env.REACT_APP_API}</h2>
  <h2>REACT_APP_PAGE_SIZE: {process.env.REACT_APP_PAGE_SIZE}</h2>
</div>
```
