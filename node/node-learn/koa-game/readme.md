- use() 中间件 
async function(ctx, next) {
  ......相关操作
  await next(); 
  ......下一个操作  等next()即下一个中间件执行完后，在来执行该操作
}

const query = ctx.query 拿到前端接口请求时传送过来的参数

异步时也符合洋葱模型
执行到第一个中间件的时候 还没执行完 可暂停 执行下一个中间件 再回来继续执行这个中间件中的操作