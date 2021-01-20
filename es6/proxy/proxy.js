// let proxy = new Proxy({}, {
//   get: function(obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })
// proxy.time = 35 //set操作
// console.log(proxy.time); //get操作 35


// let handler = {
//   has (target, key) {
//     if(key[0] === '_') {
//       return false;
//     }
//     return key in target
//   }
// }
// let target = { _prop: 'foo', prop: 'bar'}
// let proxy = new Proxy(target, handler)
// console.log('_prop' in proxy); //false 拦截 key in target 操作


// let target = function() {
//   return 'I am the target'
// }
// let handler = {
//   apply: function() {
//     return 'I am the proxy'
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p());  //把原来函数中要执行的操作拦截，代理为apply的函数


let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}
let handler = {
  ownKeys(target) {
    // Reflect 的方法 与 Proxy方法一一对应 
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}
let proxy = new Proxy(target, handler)
// console.log(proxy);
 //{ _bar: 'foo', _prop: 'bar', prop: 'baz' } 只会展现出来，但是是没用的

for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}