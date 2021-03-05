// 引入node中的http模块 来创建一个模块
let http = require('http')
let context = require('./context')
let response = require('./response')
let request = require('./request')

class Koa {
  constructor() {
    this.callbackFn;
    this.context = context;
    this.request = request;
    this.response = response
  }

  use(cb) {
    this.callbackFn = cb  //将回调函数先存储起来 先不生效 等监听到端口后再生效
  }

  createContext(req, res) {
    // 深拷贝
    let ctx = Object.create(this.context) //ctx可以拿到context 但是不修改context, ctx重新开辟了一个空间
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    // 交叉赋值
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx  // 返回上下文对象
  }

  handleRequest(req, res) {
    res.statusCode = 404  //默认页面找不到
    let ctx = this.createContext(req, res)  //创建出ctx
    // 被调用时的this 还需指向Koa 所以调用时需绑定好this
    this.callbackFn(ctx)  //回调执行完后 ctx.body的值 就会发生变化
    let body = ctx.body
    if (typeof body === 'undefined') { // 没有ctx.body时 默认为404
      res.end('Not Found')
    } else if (typeof body === 'string') {
      res.end(body)
    }

  }

  listen() {
    // createServer搭建好服务，会返回req 和 res，handleRequest在createServer里面调用，req和res被传入到 handleRequest
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...arguments)  //此处的listen为原生node的listen
  }
}

module.exports = Koa