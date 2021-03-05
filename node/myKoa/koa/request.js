let url = require('url') //node 中的url模块

let request = {
  get url() {  // 前面加一个get 函数名可以直接当为一个属性 直接调用 就会自动执行
    return this.req.url  //借助原生node拿到url 此处的this 相当于ctx.request
  },
  get path() {
    return url.parse(this.req.url).pathname
  }
}

module.exports = request