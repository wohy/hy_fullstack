// 浅拷贝 只考虑对象元素
function shallowCopy(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

// 深拷贝：只考虑普通对象属性，不考虑内置对象和函数
function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
       // 如果是对象的话，就递归该对象，直至不是对象，就把这个属性及值拷贝给 newObj
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// 深拷贝考虑 内置对象和函数的情况

// 自己定义一个判断对象的方法，解决 typeof 的问题
const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null
function deepCopy1(target, map = new WeakMap()) {  // WeakMap 不会被垃圾回收机制清理，可以暂时的存下值
  if (map.get(target)) {
    return target;
  }
  // 获取到当前值的构造函数，得到它的类型
  let constructor = target.constructor;
  // 若该值的构造函数与 正则 和 时间 匹配上了
  if (/^(RegExp|Date)$/i.test(construct.name)) {
    // 创建一个新的特殊对象 正则 或 日期类 等等的实例
    return new constructor(target);
  }
  if (isObject(target)) {
    map.set(target, true);
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepCopy1(target[prop], map)
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}