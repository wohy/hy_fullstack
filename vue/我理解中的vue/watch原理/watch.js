// 能独立监听数据的变化
// 提供一个可执行函数的场所

class watcher{
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for(let key in opts.data) {
      this.setData(key)
    }
  }

  // 判断类型
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) //返回类似"[object object]"的一个字符串
    return typeStr.slice(8, -1)
  }

  setData(_key) {
    // defineProperty第一个参数只能传入一个对象来处理
    Object.defineProperty(this, _key, { //直接把上下文指向当前的对象，所以实例中vm.a可直接跨过data访问到a
      get: function() {
        return this.$data[_key];  
      },
      set: function(newVal) {
        const oldVal = this.$data[_key]
        if (newVal === oldVal) return newVal
        this.$data[_key] = newVal
        // 调用opts里面的watch里面的函数
        //判断为函数是才帮它执行
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, newVal, oldVal)  //call 保证 $watch[_key]里的this会被绑定在watcher上
        )

      }
    })
  }
}


// 根据该实例来，推出源watcher类的代码
let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a: function (newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})

setTimeout(() => {
  vm.a = 1
}, 1000)