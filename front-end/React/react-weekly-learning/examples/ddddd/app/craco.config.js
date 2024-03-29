const CracoLessPlugin = require('craco-less');
const path = require('path');
const themeVars = require('./config/theme');
const { REACT_APP_PUBLIC_PATH } = process.env;

module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      // 修改build的生成文件名称
      paths.appBuild = 'dist';
      config.output = {
        ...config.output,
        path: path.resolve(__dirname, 'dist'),
        publicPath: `${REACT_APP_PUBLIC_PATH}/`,
      };
      return config;
    },
  },
  plugins: [
    // craco-less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
