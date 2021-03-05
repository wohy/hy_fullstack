// koa 核心非常小，依赖于中间件，htpp服务封装req、res --> ctx

// Koa是一个类
let Koa = require('koa')
// app 为Koa的实例
let app = new Koa

// 中间件的使用，中间件即一个函数会接收到两个参数 ctx 和 next
app.use((ctx, next) => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)