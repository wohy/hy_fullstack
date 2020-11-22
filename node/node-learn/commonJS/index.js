// console.log('start require');
// console.log(require('./lib.js'));
// console.log('end require');

let lib = require('./lib.js')
console.log(lib);

lib.name = '蜗牛'  //改变将影响到lib
// exports 导出的应用跟index.js里面的lib是同一个引用