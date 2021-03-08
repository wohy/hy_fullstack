const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const bodyParse = require('koa-bodyparser')
const mongoose = require('mongoose')
const config = require('./config')

app.use(cors())
app.use(bodyParse())

// 建立mongodb的连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('failed');
  } else {
    console.log('connecting database sucessfully');
  }
})


const user_router = require('./routes/api/user_router')

app.use(user_router.routes())

app.use((url) => {
  if(url == '/booksList') {

  }
})


app.listen(3000)