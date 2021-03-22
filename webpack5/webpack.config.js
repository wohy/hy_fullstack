const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        type: 'asset'
      },
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.jsx', 'json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
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
}