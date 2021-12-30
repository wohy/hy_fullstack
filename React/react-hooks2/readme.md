# 安装 依赖
  $npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev

  --save-dev 只在本地编译时使用

# 配置好 tsconfig.json
通过 typescript-loader 转译 typescript

# 使用 babel 解析 es6 语法
$ npm i babel-loader @babel/preset-env @babel/core @babel/cli --save-dev

避免全局污染
$ npm i @babel/polyfill core-js@3 --save-dev

解决公共代码 重复引入问题
$ npm i @babel/plugin-transform-runtime --save-dev
$ npm i @babel/runtime --save-dev

配置好 .babelrc 文件
```js
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": 3
    }]
  ],
  "plugin": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
    }]
  ]
}
```
并在 webpack.config.js 的 module 中配置好 使用 babel-loader

## 坑
  babel-loader 的兼容性也要注意

# npm start 启动执行