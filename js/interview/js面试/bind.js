Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let context = context || window
  let _this = this
  let args = [...arguments].slice(1)

  return function F() {
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args)
  }
}

let fn = a.myBind(b)
fn()