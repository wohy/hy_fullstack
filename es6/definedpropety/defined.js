let obj = {}
Object.defineProperty(obj, 'num', {
  // value: 1,       // 值为1
  // writable: true, // 是否可以被更改
  enumerable: true, // 是否可以被枚举
  configurable: true, // 是否可配置(能不能增、delete删)

  // getter
  get: undefined,

  // setter
  set: function(val) {
    
  }
})
console.log(obj); // num: 1