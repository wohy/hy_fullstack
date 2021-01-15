let b = {
  name: '蜗牛'
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.myapply = function (obj, thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const fn = Symbol('fn')
  // console.log(arguments);
  // console.log(Arg);
  obj[fn] = this
  const result = obj[fn](...thisArg)
  delete obj[fn]
  return result;
}

a.myapply(b, [1, 2])