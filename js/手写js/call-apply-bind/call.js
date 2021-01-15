// a.call(b, arguments...) 
// a能访问到b上的属性 即a的在b中生效了， a中的参数接在b后面，逐个传入，若不传如参数这会指向window

// 当一个函数定义出来就会具有该mycall方法
Function.prototype.mycall = function(thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 让this代表的这个函数 去到 thisArg 里面生效
  const fn = Symbol('fn') //避免fn这个单词被占用，导致命名冲突
  // 把this代表的这个函数所拥有的参数先取到
  const newArg = [...arguments].slice(1)
  thisArg = thisArg || window

  // 将掉用call函数的方法添加到thisArg的属性中去
  thisArg[fn] = this
  const result = thisArg[fn](...newArg)
  delete thisArg[fn] //为了之后再使用，影响到后面的参数，所以去delete掉
  return result;
}

let b = {
  name: '蜗牛'
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}
a.mycall(b, 2, 2)