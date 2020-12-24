- my-app 根路径下
  - npm init -y
  - npm install -save-dev webpack webpack-cli
  - 创建一个  webpack.dev.config.js 文件 在其中配置好出口entry、入口output
- 执行打包
  - webpack --config webpack.dev.config.js --mode=development
- webpack本身不能识别es6的语法，需要借助babel来识别
  - npm install @babel/core babel-loader @babel/preset-env --save--dev
  - 安装的babel/core 和 babel-loader 会出现版本冲突
  - --save 打包后还会留下代码
    --save-dev 装到开发环境，表示模板只在开发环境时需要
- $ npm i webpack-dev-server
- 跑成一个进程 --progress
webpack-dev-server --config webpack.dev.config.js --progress
  "start": "webpack-dev-server --config webpack.dev.config.js --progress"

  