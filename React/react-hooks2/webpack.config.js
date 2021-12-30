const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")
const path = require('path')

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: ["@babel/polyfill", "./main.ts"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "assests/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // name of file in ./dist/
      template: "index.html", // name of template in ./src
      hash: true 
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}