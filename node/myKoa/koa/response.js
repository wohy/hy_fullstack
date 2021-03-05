let response = {
  set body(value) { //定义body属性可执行
    this.res.statusCode = 200 //只要调用了ctx.body 则将状态码改为200
    this._body = value
  },
  get body() {
    return this._body
  }
}

module.exports = response