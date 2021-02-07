# koa 框架 搭建一个服务
- npm init -y 
- npm i koa

```
const Koa = require('koa')

const app = new Koa()

app.use((ctx) => {
  ctx.body = 'hello'
})

app.listen(3000)
```
- nodemon app.js
将服务运行起来

## 登录
- 需要定义一个 localhost：3000/login 接口来接收前端传入的数据 并针对数据 进行响应
接口实质上相当于前端的路由
放在routes文件夹中

- npm i koa-router 安装

- 定义好路由层 接口
需要做的反馈动作 
控制层操作 控制发送什么给前端
放在app中的 controllers

- 由于前端 的 端口是 8080 ， 而监听的后端端口是 3000
就会存在跨域问题
可通过 koa2-cors 插件解决
npm i koa2-cors

- 由于koa解析参数的能力很差
  所以需借助一个插件 koa-bodyparser
  npm i koa-bodyparser


- 需要连接数据库 连接线程池
  借助 mongoose 插件
  npm i mongoose

- config.js 配置好连接的mongodb数据库路径等

- 在数据库中建立好数据表 
  代码拿到app 下的 models 中
  用户 user.js
  密码 password.js

- npm run serve 将前端运行后 进入login页面

- 为了匹配上账号后，判断登录密码是否正确
  需要对加密后的密码进行解密
  这里采用 node.bcrypt 插件进行加密
  npm i bcrypt
  代码到app/util/passport.js中实现

## 注册
- 步骤类似于登录
- 配置好注册的接口 有一个 /login 可用
- 在user_controller.js 中进行相关操作
- 在注册时需连接数据库 访问其中是否有相同用户名
- 如果没有 则可将其 插入到数据库中
- 给该用户名 添加一个 userId 可以使用时间戳 date，这里使用 一个插件 uuid
- 插入密码 前需对密码进行加密