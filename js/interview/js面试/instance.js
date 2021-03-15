function myinstanceof(left, right) {
  let right = right.prototype
  let left = __proto__
  while(true) {
    if(left === right) {
      return true
    }
    let left = __proto__
  }
}