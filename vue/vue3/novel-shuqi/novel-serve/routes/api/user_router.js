const Router = require('koa-router')
const router = new Router()
const user_controller = require('../../app/controllers/user_controller')

router.post('/login', user_controller.login)
  // 发送post请求 拿到前端传过来的账号密码，去数据库中匹配是否存在 代码拿到在app的controllers中实现

router.post('/register', user_controller.register)

module.exports = router