const Koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new Koa()

app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/',  async (ctx) => {
    // 访问根路径时 将根路径的body 写入一个html页面 通过fs模块去读取该html页面  __dirname 为当前index.js文件的绝对路径
    ctx.body = fs.readFileSync(__dirname + './source/index.html', 'utf-8')
  })
)


 app.listen(3000)