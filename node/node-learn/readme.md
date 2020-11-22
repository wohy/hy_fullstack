# node.js
- 是一个基于 chrome V8引擎的一个js运行环境
- node.js使用一个事件驱动，非阻塞式的IO模型，轻量且高效

# commonJS   ESCMScript

# npm  
- node开源出来的一个仓库
- npm init -y 后生成的package.json文件里的属性dependencies中，为该文件的依赖，npm install xxxx 安装后生成的modules文件可删去，下次直接npm install 即可重新安装，package.json文件中含有的所有依赖
删去则直接 执行 npm uninstall即可，此时package.json的dependencies将被清空
- 执行 npm install -g cnpm --registry=https://registry.npm.taobao.org 安装npm淘宝镜像

# 非阻塞式的IO模型
