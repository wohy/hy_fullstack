let proto = {

}

// 取值代理
//要使 proto.url = ctx.request.url
function defineGetter(property, name) {
  // __defineGetter__自定义获取器 做对象代理 原生js就有的方法
  proto.__defineGetter__(name, function() {
    return this[property][name]
  })
}
//取request中的url时，会被代理返回this[request][url]
defineGetter('request', 'url') 
defineGetter('request', 'path')
defineGetter('response', 'body')

// 设置值代理
function defineSetter(property, name) {
  proto.__defineSetter__(name, function(value) {
    this[property][name] = value
  })
}
defineSetter('response', 'body')


module.exports = proto