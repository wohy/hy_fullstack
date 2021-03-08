const koa = require('koa')
const app = new koa()
var cors = require('koa-cors');
app.use(cors())

app.use((ctx) => {
  if (ctx.url === '/list') {
    console.log(ctx.url);
    ctx.body = ['hello', 'zhou', 'ceo']
  }
})

app.listen(3001)