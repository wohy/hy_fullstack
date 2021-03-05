let Koa = require('./koa/application')
let app = new Koa()

app.use((req, res) =>{
  res.end('hello wn') //监听3000端口 响应后才返回hello wn
})

app.listen(3000)