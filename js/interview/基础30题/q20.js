(function() {
  var x = y = 1 
})()

// 相当于
// var y
// (function() {
//   var x 
//   x = 1
//   y = 1 
// })()



console.log(x); // error
console.log(y); // 1