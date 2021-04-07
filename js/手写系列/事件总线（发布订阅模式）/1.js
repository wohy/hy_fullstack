class EventEmitter {
  constructor() {
    // 存储事件的空间
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      // 有该类型的事件，即将回调直接 push 到该类型的事件空间中
      this.cache[name].push(fn)
    } else {
      // 没有的话就直接 将 该回调 以数组的形式赋值给 cache 中的该 name 属性
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    // tasks 引用该类型的事件
    let tasks = this.cache[name]
    if (tasks) {
      // 如果有的话，找到该回调或函数在该类型事件中的位置
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        // 有则将该函数 去除掉
        tasks.splice(index, 1)
      }
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 先创建一个副本去保存当前的该 name 类型的回调函数 因为 若回调函数内继续注册一个 相同的事件的话，就会造成死循环
      // slice 切下来 不改变原数组
      let tasks = this.cache[name].slice()
      // 循环 tasks 中的函数 去调用
      for (let fn of tasks) {
        fn(...args)
      }
      if (once) {  // 设置 once 来，设定该事件是否只执行订阅 执行一次
        delete this.cache[name]
      }
    }
  }
}

// 测试
let eventBus = new EventEmitter()
let fn1 = function(name, age) {
  console.log(`${name} ${age}`);
}
let fn2 = function(name, age) {
  console.log(`hello, ${name} ${age}`);
}

// 订阅 aaa 事件 发布了即执行 fn1 fn2 函数
eventBus.on('aaa', fn1)  // 打印 '小明 18'
eventBus.on('aaa', fn2)  // 打印 'hello，小明 18'

// 发布事件
eventBus.emit('aaa', false, '小明', 18)
eventBus.emit('aaa', true, '小明', 18)



