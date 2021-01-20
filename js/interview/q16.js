// arguments

function sidEffecting(ary) {  // ary 传进去为 [1, 1, 10]
  ary[0] = ary[2] //[10, 1, 10]
}

function bar(a, b, c) { //1 1 1
  c = 10; //1 1 10
  sidEffecting(arguments) 
  // 参数变量和arguments是双向绑定的 则此时的arguments是一个 1 1 10的类数组
  // 类数组具有下标索引、length属性，为一个对象类型，而非Array
  return a + b + c  // 10 + 1 + 10
}

console.log(bar(1, 1, 1)); //21