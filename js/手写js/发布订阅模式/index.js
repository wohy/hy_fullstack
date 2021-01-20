class EventEmitter {
  constructor () {
    // 存储emit发布的事件
    this.events = this.events || new Map() //初始为空的，为Map对象，取值用get 存值用set
    // {
    //   'age': function fn() {}
    // }
  }

  // 监听事件
  addListener (type, fn) { //订阅 type，订阅到后的操作 fn
    if(!this.events.get(type)) { // 还没发布
      this.events.set(type, fn)
    }
  }

  // 触发事件 发布
  emit (type) {
    // 从events中提取到名为type的事件
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

let emitter = new EventEmitter()
// 订阅
emitter.addListener('ages', age => {
  console.log(age);
})
// 发布
emitter.emit('ages', 18)