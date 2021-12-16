1. webpack 
  npm i -g webpack 
  npm i -g webpack-cli
  配置一下 完成 src/index.js -> dist / main.js 让项目运行起来
  直接 $ webpack 可以直接运行

  通过 loader 来解析 jsx 语法 处理为 js
  npm i babel-loader -D
  -D (devDependecies)开发时才需要使用该依赖，编译时会使用，所以加一个 -D，上线之后就不需要了

2. react 初体验
- 每一个文件都得引入下react
```js
  import React from 'react';
  import ReactDom from 'react-dom';
```
npm i react react-dom
