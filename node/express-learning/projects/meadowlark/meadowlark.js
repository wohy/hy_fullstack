// 入口文件
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const port = process.env.port || 3000

// 配置 handlebars 视图引擎
app.engine('handlebars', engine({
  defaultLayout: 'main',
}))
// 将应用视图引擎 默认设置为上面配置好的 handlebars
app.set('view engine', 'handlebars')

// 在申明任何路由前，加入 static 中间件，来处理静态文件和视图。
// 指定好静态资源目录，目录中的资源会不加任何特别处理，直接发送给客户端。
// 此处静态资源目录为 public ，其中内容在每个页面中都生效。
app.use(express.static(__dirname + '/public'))

// 需要注意写在 404 之前，避免页面直接匹配到 404 ，无法正常进入页面
app.get('/', (req, res) => {
  // res.type 设置 content-type 头信息
  // res.type('text/plain')
  // res.send('Meadwark Travel')

  // 直接使用 handlebars 引擎渲染，实际渲染文件为 home.handlebars
  res.render('home')
})


const welcomeTextArr = ['欢迎使用', 'Welcome to use', '歡迎使用', 'Velkommen til brug', 'Добро пожаловать в использование', '大歓迎です', 'Bienvenue à utiliser', '오신 것을 환영합니다']


app.get('/about', (req, res) => {
  // res.type('text/plain')
  // res.send('About Meadwark Travel')

  // 直接使用 handlebars 引擎渲染，实际渲染文件为 about.handlebars
  const randomWelcomeText = welcomeTextArr[Math.floor(Math.random() * welcomeTextArr.length)]
  res.render('about', { welcomeTextArr: randomWelcomeText })
})

// 定制 404 页面
// 通过过 use 回调接收的参数个数可以 区分是 404 还是 500
app.use((req, res) => {
  // res.type('text/plain')
  // res.status(404)
  // res.send('404 - Not Found')

  res.status(404)
  res.render('404')
})

// 定制 500 页面
app.use((err, req, res, next) => {
  console.error(err.message)
  // res.type('text/plain')
  // res.status(500)
  // res.send('500 - Server Error')

  res.status(500)
  res.render('500')
})

// 视图引擎会默认返回 text/html 内容类型 和 200 状态码，无需另外再指定

app.listen(port, () => {
  console.log(`Express started on http://localhost:${port}; ` + 'press Ctrl-C to terminate.')
})