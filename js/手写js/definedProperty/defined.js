let obj = {}
Object.defineProperty(obj, 'num', {
  // value: 1,
  // writable: false,
  enumerable: true,
  configurable: false,
  // getter
  get: undefined,
  // setter
  set: function (val) {
    
  }
})
// obj.num = 1
// for (let key in obj) {
//   console.log(key);
// }
// delete obj.num

console.log(obj);
