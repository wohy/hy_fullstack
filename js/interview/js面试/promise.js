new Promise((resolve, reject) => {
  console.log('hello');
  resolve('ok')
}).then((res) => {
  console.log(res);
})

const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'

function Mypromise(fn) {
  const that = this
  that.state = PENDING 
  that.value = null
  that.resolvedCallbacks = [] //.then() 的 回调函数数组
  that.rejectedCallbacks = [] // reject 的回调

  function resolve(vaule) {
    if (that.state === PENDING) {
      that.state = RESOLVE
      that.value = vaule
      that.resolvedCallbacks.map(cb =>{
        cb()
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECT
      that.value = vaule
    }
  }

  try {
    fn(resolve, reject)
  } catch(e) {
    reject(e)
  }
}

Mypromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
  onRejectd = typeof onRejected === 'function' ? onRejected : (r) => {throw r}

  if (that.status === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if () {

  }
}