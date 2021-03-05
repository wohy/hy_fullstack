let Koa = require('koa')
let app = new Koa

// 原生node中 通过req.url 获取前端请求的那个路径
// req.path 原生node中 没有path这种写法
app.use((ctx, next) => {
  // ctx.body = 'Hello Koa'
  // 一下4个都能打印出 请求的路径 为 / 也会拼接上前端传来的后面的参数
  console.log(ctx.req.url);
  console.log(ctx.request.url);
  console.log(ctx.request.req.url);
  console.log(ctx.url);

  console.log(ctx.req.path);  //undefined  所以ctx.req = req
  console.log(ctx.request.path); //  /  ctx的request是koa自己封装的属性 path也是koa封装的
  console.log(ctx.request.req.path); //undefined  所以ctx.request.req = req = ctx.req
  console.log(ctx.path); // /  用ctx来代理一下ctx.request

  ctx.response.body = 'hello'
})

app.listen(3000)