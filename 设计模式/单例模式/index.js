class SingleDog {
  show() {
    console.log('我是单例对象');
  }
  static getInstance() {
    // if(!SingleDog.instance) {
    //   SingleDog.instance = new SingleDog() 
    //   //创建了第一个实例之后，便有了instance属性，则不会再被new
    // }
    // return SingleDog.instance

    // 闭包 只有第一次是instance为null，之后instance = new SingleDog()将不会被释放
    let instance = null
    return (function() {
      if(!stance) {
        instance = new SingleDog()
      }
      return instance
    })()
  }
}
const s1 = SingleDog().getInstance()
const s2 = SingleDog().getInstance()

s1 === s2