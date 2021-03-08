let Koa = require('koa')
let app = new Koa

app.use((ctx, next) => {
  console.log(1);
  next()
  console.log(2);
})
app.use((ctx, next) => {
  console.log(3);
  next()
  console.log(4);
})

app.use((ctx, next) => {
  console.log(5);
  next()
  console.log(6);
})

// 打印 1 3 5 6 4 2

app.listen(3000)