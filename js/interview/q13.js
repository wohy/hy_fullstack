var a = [0]
if([0]) {
  console.log(a == true); // false
} else {
  console.log('hello');
}

// [] => Boolean值 为 true   所以 if([0]) 为true
// == 其中有一个boolean类型，会将Boolean类型转换为Number类型，所以true会转换为1
// == 一边为其它类型，一边为Number类型，会将一边也转换为Number类型

// [0] == true => [0] == 1 => '0' == 1 => 0 == 1   为false

//  [] == []  false   引用类型 内存地址不一致