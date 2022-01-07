- npx create-react-app react-travel --template typescript 搭建项目
  使项目集成 ts 支持

- 使用 typescript-plugin-css-modules 插件，可用于开发环境

如何读取 tsconfig.json 文件的？ 实际是 webpack 读取编译的
- npm run eject 运行后 eject 会消失，运行前需要将其提交到 git 仓库中
  运行后可看到 config 中的 webpack.config.js
  利用 babel-loader 对 tsconfig.json 文件进行编译
  

- 脚手架搭建
  安装脚手架：npm i -g create-react-app
  安装过就不需安装
  开始搭建 create-react-app + 项目名

  npx create-react-app react-travel --template typescript
  使项目集成 ts 支持

- 进入项目 
  yarn start 启动该项目

- 使用 typescript-plugin-css-modules 插件，可用于开发环境