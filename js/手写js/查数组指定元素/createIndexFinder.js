function createIndexFinder(dir) {
  return function(array, predicate, context) {
    let length = array.length;
    let index = dir > 0 ? 0 : length - 1;

    for (; index >= 0&& index < length; index +=dir) {
      // context 上下文，绑定this，防止传入的函数修改this
      if (predicate.call(context, array[i], i, array)) return index;
    }
    return -1;
  }
}
let findIndex = createIndexFinder(1)
let findLastIndex = createIndexFinder(-1)