function add(num1, num2) { // num1 , num2 为字符型
  // 定义进位 1或0, 保留当前位 1 ~ 9
  // 从末尾开始循环相加
  for(let i = num1.length - 1, j =  num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    // 当较短的取完时，高位补0 再继续相加
    let a = num1.charAt(i) || 0
    let b = num2.charAt(j) || 0
    let sum = Number(a) + Number(b) + carry
    sum >= 10 ? carry = 1 : carry = 0;
    res = (sum % 10) + res
  }
  if(carry === 1) {
    res = 1 + res;
  }
  return res;
}