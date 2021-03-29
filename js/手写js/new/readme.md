如何实现一个new
  使用Object.create()，将原构造函数的原型深拷贝下来
  再通过apply，将参数传入，并绑定fn的this到obj中，并执行，若返回的是一个对象类型则返回，若不是，则直接返回拷贝下来的原型
```
function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
```