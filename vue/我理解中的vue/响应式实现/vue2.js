// vue2.0 是如何实现响应式的
// 数据改变了，视图就会更新

let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype);
// 需要重写数组的方法 push shift unshift pop reserve
['push', 'shift', 'unshift'].forEach(method => {
  // 函数劫持，重写函数
  proto[method] = function() {
    updateView()
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

// 观察者
function observer(target) {
  // 此时的 array 也会被判断为 object
  if (typeof target === 'object' && target !== null) {
    return target
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  
  if (typeof value === 'object' && value !== null) {
    observer(value)
  }

  if (Array.isArray(target)) {
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
  }

  Object.defineProperty(target, key, {
    get() {
      return value
    },

    set(newValue) {
      if(newValue !== value) {
        updateView()
        value = newValue
      }
    }
  })
}

function updateView() {
  console.log('更新视图');
}

// Object.definedProperty
let data = {
  name: 'wn',
  age: {
    n: 18
  },
  like: {
    hb: 'eat'
  },
  sex: 'boy',
  job: ['coder', 'driver']
}
observer(data)
console.log(data.name);
data.name = 'cg'
console.log(data.name);
data.like.hb = 'sport'
console.log(data.like.hb);

data.job.push('teacher')
console.log(data.job);