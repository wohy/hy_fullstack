// let arr = [{old: 'old'}, 1, true, null, undefined]
// let newArr = arr.concat()
// arr[0].old = 'new'
// arr[1] = 2
// console.log(arr);
// console.log(newArr);
// 此时arr中的前两个元素为[{old: 'new'},2] 而newArr前两个元素为[{old: 'new'},1]
// 则当为一个引用类型时拷贝不彻底，为浅拷贝，对原始值的操作会影响到拷贝得到的值;基本数据类型时为深拷贝;引用数据类型的拷贝，都称为浅拷贝

// let arr = [{old: 'old'}, 1, true, null, undefined]
// let newArr = JSON.parse(JSON.stringify(arr))
// // 此时为深拷贝，但该方法无法拷贝函数