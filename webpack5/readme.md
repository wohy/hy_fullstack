# 安装
  $ npm init -y
  $ npm uninstall webpack -g webpack-cli -g
  $ npm i webpack webpack-cli -g
  若需要则将 webpack 更新
# 配置 webpack
## webpack.config.js 
``
  entry: './src/index.js',  /**入口文件**/
  output: {                 /**输出文件**/
    filename: '[name].[contenthash].js',  /**文件名**/
    path: path.resolve(__dirname, 'dist') 
    /**输出文件所在路径，__dirname 绝对路径下， 生成一个dist 文件**/
  }
``

# 在 package.json 中配置，启动命令
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve --open chrome",
    "build": "webpack"
  }
```
一下配置 执行 npm run start 可以开启 打包热更新，前提需要安装 webpack-dev-server 依赖
```js
  "scripts": {
    "start": "webpack-dev-server --mode development --inline --hot --open"
  }
```

# webpack 只能识别 .js 文件
  需下载 loader 处理 .css .less .sass 等文件

  $ npm i style-loader css-loader
  
  解析 import 读出引入的 css 生成一个 Array ，style-loader使这个 Array 生效
  在 config.js 中，加入 module ，配置好，说明打包 css 所用的 loader， loader 的调用是链式的 从右到左 

```js
  module: {
    rules: [
      {
        test: /\.css$/i,  /**正则匹配 .css 后缀的文件**/
        use: ['style-loader', 'css-loader'] /**使用 从右到左 依次调用这两个插件**/
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        type: 'asset'                     
        /**assest模块  webpack5 新增，不需要额外的 loader 来识别图片和 字体**/
      },
      {
        test: '/\.js$/',
        exclude: /node_modules/,  
        use: ['babel-loader']
        /**使用 babel-loader 来解析 es6 语法**/
      }
    ]
  }
```

# import 引入时可省略后缀 以及 使用 '@' 来代表 src 目录
```js
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.jsx', 'json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
```

# 使用 babel 解析 es6 语法
$ npm i babel-loader @babel/preset-env @babel/core

避免全局污染
$ npm i @babel/polyfill core-js@3

解决公共代码 重复引入问题
$ npm i @babel/plugin-transform-runtime
$ npm i @babel/runtime

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


# 直接打包 html 文件
$ npm i html-webpack-plugin


# 热更新
$ npm i webpack-dev-server

# 配置好 plugin 的使用
```js
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '我是webpack.config配置的标题',
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
```