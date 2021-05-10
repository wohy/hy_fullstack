# 进阶的开发方式
- parcel
- parcel 的哥哥 webpack
- webpack 是面试的重灾区，
    工作流程，没有 webpack，何以代码？
    $ npm init -y
    1. bulid 打包为了上线 以 dist 作为目录    
        dev src/ 目录，development 的缩写 处于开发阶段
        bulid 打包 编译
    2. 入口文件 index.html
    $ npm i webpack
    $ npm i -D webpack-cil
    $ npm run build
    打包生成了 一个 dist 文件夹下的 bundle.js

    $ live-server
    跑成一个服务

    main.js -> bundle.js
    ess6|7|8|9 -> js  babel 老的浏览器不支持，编译一下
    stylus -> css 
    编译一下(npm run build)
    写的代码 build 用户执行的代码
    webpack 来执行代码生产工艺
    webpack --mode=development 按照开发阶段的模式来打包编译
    