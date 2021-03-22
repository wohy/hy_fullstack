const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(fn) {
  const that = this;  //防止传入的函数影响到this的指向
  that.state = PENDING; //当前状态 开关状态
  that.value = null     //用于承接resolve 或 reject 抛出来的值 让.then 能够接收到
  that.resolvedCallbacks = [] //.then的回调函数都放在该数组中，因为可以接多个.then()，所以需一个数组
  that.rejectdCallbacks = []


  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value //将当前的的value复制到全局下的value 
      // resolve 的执行完毕 使.then里的回调函数生效，此处需将.then()里的回调函数执行了，所以需要先promise里的执行完resolve后再执行其后.then()
      that.resolvedCallbacks.map(cb => { //cb拿到的是回调函数
        cb(that.value) //将其执行，并接受resolve传出来的参数
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED;
      that.value = value;
      that.rejectdCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }


  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onFullfilled, onRejected) {
  const that = this
  // 若传入的不是一个函数，会给你转换为一个箭头函数
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : res => res  //typeof判断复杂类型只可以判断出function
  onRejected = typeof onRejected === 'function' ? onRejected : res => { throw res }

  // 将回调函数 push到两个数组中
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfilled)
    that.rejectdCallbacks.push(onRejected)
  }

  // 第一个.then() 成功执行完后 ，其后的.then()是不依赖Promise的resolve的
  // 第二个以后的.then()若其前面的.then()里的函数若不是返回一个Promise的话，就不会再等待前面的.then执行完
  if (that.state === RESOLVED) {
    onFullfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}


// test
function a() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve();
      // reject();
    }, 1000)
  })

}
// 异步 宏任务队列
function b() {
  setTimeout(() => {
    console.log('bbbb');
  })
}

// a具有的pomise本身就是异步的，而.then是同步，.then会先执行，将b回调push到resolvedCallbacks中，此时开始执行a，a执行完后驱使b开始执行
a.then(b)