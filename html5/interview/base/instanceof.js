// let arr = []
// arr instanceof Array

function instance_of(L, R) {
    L = L.__proto__
    let O = R.prototype
    while (true) {
        if (L === null) return false  // 当找到null上时 返回false
        if (O === L) return true  //R的显示原型上找到了 与 L的隐式原型相同的值返回true
        L = L.__proto__           // 从L一直往上找直到Object.prototype
    }
}
console.log(instance_of(arr, Array));