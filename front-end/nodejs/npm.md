# npm

## 常见的命令

> vue 项目查看打包文件结构图

```bash
# vue-cli-service build "--report"

$ npm run build --report
$ npm run build -- --report
```

## 解决 npm 安装全局模块权限问题

- [修改默认安装路径](#change_installation_path)
- [重新安装 node](#re_installation_path)

### 修改默认安装路径

<a name="change_installation_path" id="change_installation_path">

1. 新建全局安装的路径

   ```bash
   mkdir ~/.npm-global
   ```

2. 配置`npm`使用新的路径

   ```bash
   npm config set prefix '~/.npm-global'
   ```

3. 打开或新建`~/.profile`, 其内容为:

   ```bash
   export PATH=~/.npm-global/bin:$PATH
   ```

4. 更新系统环境变量

   ```bash
   source ~/.profile
   ```

### 重新安装 node

<a name="re_installation_path" id="re_installation_path">

> 使用 `brew`、`yarn`、`yum` 等工具重新安装 `node`
