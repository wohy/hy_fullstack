# 简介
  1. 由阿里开源的一套构建高性能、可扩展的原生应用跨平台方案
  2. 一个使用 Web 开发体验来开发高性能原生应用(Android/ios)的框架
  3. 使用同一套代码来构建 Android、ios 和 web 应用
  4. 不同于 Web App、HTML5 App 或 hybrid App
  5. 类似框架 React Native
  6. 支持前端库: Vue 和 Rax(类似于 React)
  7. 开发模式：模块化，组件化，工程化
  8. 相关站点：
    1. weex 官网
    2. weex 样例
    3. weex blog

# 实现跨平台
  vue File => JS Bundle => JS Runtime 打包生成 => Android 、ios、和 H5 的应用4

# 移动端应用开发模式
  1. Native App 
    即原生 App，传统的原生开发，分别用各自平台的开发语言
    优点：性能最高
    缺点：维护成本高，复用性差，ios 版本更新也成问题

  2. Web App
    优点：开发成本最低，调试也方便；用户不需要安装，不会占用手机内存，并且通过浏览器即可运行
    缺点：用户体验差；由于实质还是网站形式，所以必须联网

  3. Hybrid App
    混合开发，一部分原生的 一部分和 Web 相关

  4. React Native
    FaceBook
    写一份代码可同时生成 Android 和 ios 的应用

  5. Weex

# 环境搭建
  - 安装node、npm、webpack、
  weex-toolkit：$ npm install -g weex-toolkit
  安装 配置好 android 和 java 环境

# UI 框架  weex-ui

# 内置组件

# 想在 Android 中看到效果 将 vue 中的 index 文件 替换到 Android 的 assets 中的 dist 文件 中的 index.js 点击 在 模拟器中运行即可看到效果

# 兼容 vuex 和 vue-router
只能使用 abstract模式 路由 不能使用 history 和 hash 模式
不能使用 router-link

# 开始项目
  $ weex create + 项目名
  进入该项目文件
  $ npm install
  $ weex platform add android (加入我们的安卓平台)
  会生成一个 android 文件
  也可再执行 $ weex run android 可会报错找不到终端设备
  打开 android studio
  打开项目 选择刚刚那个生成的 android 文件打开
  打开虚拟机 运行

# 常用命令
  - 热更新
    script 配置中 的 bulid 的 属性值后加上 --watch
    npm run build 刷新页面会自动打包
    npm run serve 跑成一个服务
    通过 webpack-dev-server 可实现 热更新，在 url 后加上 webpack-dev-server/ 即可看到热更新效果

  - android 中的效果变化 
    将 dist 中的 app.weex.js 文件 替换到 Android 的 assets 中的 dist 文件 中的 index.js 点击 在 模拟器中运行 即可看到效果
    也可通过 webpack 配置来实现 两边同时打包 就不需要 再去做以上操作

  - weex init + 项目名 建立一个 vue 项目
    weex create + 项目名 建立一个 webpack 项目
    页面 weex.html 


# 在手机上观看效果
  通过 android studio 的 build 的 bulid APK
  机会打包生成一个 apk 文件，可将该 apk 下载到手机终端查看效果
  

# weex 组件 与 vue 组件
  布局的不同：weex 组件只支持 flex 布局，不再支持百分比布局
  flex 布局，移动端全都支持
  weex 不支持 CSS 的 组合写法 如，border: 1px solid #000
  weex 只支持 px 单位
  dpi => dp => px 

