const glob = require('glob')

// // 阻塞式的I/O调用方式
// var result = null
// console.time('glob');  //开始计时
// result = glob.sync(__dirname + '/**/*') //   __dirname目录名  '/**/*'目录通配符，匹配所有的文件
// console.timeEnd('glob');  // 结束计时打印glob执行的时间
// console.log(result);    // 17.515ms

// 非阻塞式的I/O调用方式
var result = null
console.time('glob');
glob(__dirname + '/**/*',function(err, res) {
    result = res;
    console.log(result);
})
console.timeEnd('glob');  // 2.455 ms

console.log(1 + 1); //会先打印2，类似于js中的异步