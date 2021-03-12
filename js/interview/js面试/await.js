var a = 0;
var b = async () => {
  a = a + await 10    // await 内部实现了 generators ，而 generators 会保留堆栈中的数据 而a当前的值0已经存在了调用栈当中
  console.log(a); // 10
  a = (await 10) + a
  console.log(a);  // 20
}
b()
a++
console.log(a); //  1

// 10 20 1