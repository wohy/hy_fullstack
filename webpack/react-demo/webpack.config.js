const path = require('path')
// node 环境中有一个超级变量 表示当前项目的绝对路径，该变量为_dirname，表示当前路径下
// 通过 path.resolve(), 将两个路径拼接起来返回另一个路径 绝对路径
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  /**一个个模块去打理 js babel await */
  module: {
    rules: [
      /**babel-loader 的配置 预处理 
       * npm i @babel/core
       * @babel/preset-env 编译 解析es6 为 es5
       * @babel/preset-react 解析 react 语法
      */
      {
        test: /\.jsx?$/,
        use: { /**使用什么东西来处理 jsx 的模块 */
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
      // {
      //   text: /\.styl$/,
      //   use: {
      //     loader: 'stylus-loader'
      //   }
      // }
    ]
  }
}