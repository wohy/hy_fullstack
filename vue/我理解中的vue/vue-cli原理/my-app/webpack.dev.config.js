const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  //入口文件的绝对路径
  entry: path.join(__dirname, 'src/index.js'),
  
  // 将入口文件打包filename为文件名输出到绝对路径'./dist'下
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },

  // 配置一个模块
  module: {
    rules: [
      {
        test: /\.js$/,  //识别所有带.js后缀的文件
        loader: 'babel-loader',  //通过babel-loader工具加载
        exclude: /node_modules/  //node_modules中的文件除外
      },
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: '8888',
    open: true,
    hot: true
  }
}