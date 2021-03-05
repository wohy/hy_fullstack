let Koa = require('./koa/application')
let app = new Koa()

app.use((ctx) =>{
  // 可带参数的路径
  console.log(ctx.req.url);  //能取到路径  /
  console.log(ctx.request.req.url); //   /
  console.log(ctx.request.url); // 也要为 /  相当于ctx.request.req.url
  console.log(ctx.url); //ctx能够代理 ctx.request 的属性

  // 不带参数的路径
  console.log(ctx.req.path); //  undefined
  console.log(ctx.request.req.path); //  undefined
  console.log(ctx.request.path); //  /
  console.log(ctx.path); //  /

  // 原生node 执行res.end('hello')
  // koa中为
  ctx.body = 'hello' //ctx.body 也是代理
  
})

app.listen(3000)