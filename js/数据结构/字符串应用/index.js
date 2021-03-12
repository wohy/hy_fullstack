// 字符串反转
const str = 'maosen'
const res = str.split('').reverse().join('')
console.log(res);

// 最长回文字符串

// API
// function isPalindrome1(str) {
//   const res = str.split('').reverse().join('')
//   return res === str
// }

function isPalindrome2(str) {
  // 双指针
  let i = 0, j = str.length
  while(i < j) {
    if(str[i] === str[j]) {
      i++;
      j--
    } else {
      return false;
    }
  }
  return true

  // 也可以 将 str 分为两半 其中一半顺着走 另一半逆着走
}


// 给定一个非空字符串s，最多删除一个字符串。判断能否成为回文字符串
// 字符串都为小写字母
let str = 'abac'  //true

function isPalindrome3(str) {
  let i = 0, j = str.length
  let strArr = str.split('')
  while(i < j) {
    arr.splice()
    if(str[i] === str[j]) {
      strArr.splice(str[i], 1)
      strArr.splice(str[j], 1)
    } 
    i++;
    j--
  }
  if(str.length >= 3) {
    return false
  } else {
    return true
  }
}
