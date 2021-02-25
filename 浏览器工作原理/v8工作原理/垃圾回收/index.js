function foo() {
  var a = 1
  var b = { name: '酒神' }
  function showName() {
    var c = 2
    var d = { name: '周老板' }
  }
  showName()
}
foo()

// showName执行上下文 (栈顶)
  // 变量环境：c=2 d=1050(任意堆地址)
  // 词法环境：
// foo执行上下文 (栈中部)
  // 变量环境：a=1 b=1003
  // 词法环境：
// 全局执行上下文 (栈底)
// 堆空间：1050：{ name: '周老板' }   1003：{ name: '酒神' }
// showName执行完，showName执行上下文出栈
// 遍历showName执行上下文，发现遍历不到对1050地址的引用了，此时的1050地址对应的对象会被标记为垃圾数据
// 会被垃圾回收机制回收



