// bind返回的是一个函数
let b = {
  name: '蜗牛'
}
function a(e, r) {
  this.sex = 'boy';
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.mybind = function(thisArg) {
  // this 会指向调用mybind的函数(即a)，避免之后嵌套的函数改变this的指向
  const self = this
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const newArg = [...arguments].slice(1)
  // console.log(thisArg); //{ name: '蜗牛' }

  // const fn = Array.prototype.shift.call(arguments)
  // arguments本身为一个类数组不含有数组的shift方法，需要用call来借用Array原型上的shift方法
  const nop = function() {}
  // bind需要返回出来一个函数，且返回的这个函数能够被new产生实例
  // bound需要继承到调用mybind方法的那个函数（即a）中的属性
  const bound = function() {
    // return self.apply(fn, newArg)  //此处的thisArg代表的就是b，所以不需在shift截取
    return self.apply( // 此时的self为this为a 使a在b中执行， 则此时a中的sex属性已经生效了
      this instanceof nop ? this : thisArg, // 若此时的this与函数类型相同，则取this，否则去thisArg 是new出来的instanceof为true，否则为thisArg
      newArg
    ) 
  }

  // 此时的this依然指向a
  if (this.prototype) {
    nop.prototype = this.prototype  //将a的原型复制给nop的原型
  }
  bound.prototype = new nop()  //再通过new，让bound的原型继承到nop的属性，此时的nop就继承到了a的属性
  // 若直接将a的原型复制给bound.prototype，则bound只能继承到a原型上的属性，而继承不到a中定义的属性
  
  return bound;
}

let res = a.mybind(b, 1, 2)
res() //此时bound中的apply第一个参数为thisArg
let newA = new res() //此时bound中的apply第一个参数为this
console.log(newA); // a{ sex: 'boy' }