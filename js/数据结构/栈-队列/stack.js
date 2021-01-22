// 有效括号
//给定一个只包含'(', ')', '{', '}', '[', ']'的字符串，判断字符串是否生效


// ({[]}) true
const isValid = function(s) {
  let newStack = [];
  let newArray = s.split('')
  if(newArray.length === 0) {
      return true;
  }
  for(let i = 0; i < newArray.length; i++){
    if(newArray[i] === '}' || newArray[i] === ']' || newArray[i] === ')') {
      if(newStack.length === 0) {
        return false;
      } else {
        if(newArray[i] === '}' && newStack[newStack.length - 1] === '{') {
          newStack.pop()
        }
        else if(newArray[i] === ']' && newStack[newStack.length - 1] === '[') {         
          newStack.pop()
        } else if(newArray[i] === ')' && newStack[newStack.length - 1] === '(') {          
          newStack.pop()
        } else {
           return false;
        }
      }
    }
    else if(newArray[i] === '{' || newArray[i] === '[' || newArray[i] === '(') {
      newStack.push(newArray[i])
    }
  }
  if(newStack.length === 0) {
    return true;
  }
};


// var isValid = function(s) {
//     function Stack() {
//         this.size = size
//         this.pop = pop 
//         this.data = []
//         this.top = 0
//         this.push = push 
//         this.peek = peek
//     }
//     function push(element) {
//        this.data[this.top++] = element
//     }
//     function pop() {
//         return this.data[--this.top]
//     }
//     function peek() {
//         if(this.top < 0)
//             return 'null'
//         else
//             return this.data[this.top-1]
//     }

//     function size() {
//         return this.top;
//     }
//     var stack = new Stack(),
//         i;
//     for(i = 0;i < s.length;i++) {
//         if(s[i] == '(' || s[i] == '[' || s[i] == '{')
//             stack.push(s[i]);
//         else{
//             if(stack.size() == 0)
//                 return false;
//             var c = stack.peek();
//             stack.pop();
//             var flag;
//             if (s[i] == ')') {
//                 flag = '('               
//             }
//             else if(s[i] == '}') {
//                 flag = '{'
//             }
//             else{
//                 flag = '['
//             }
//             if(c != flag)
//                 return false;
//         }
//     }
//     if(stack.size() != 0)
//         return false;
//     else
//         return true;

//  };






// map对象来维护左括号和有括号的对应关系
const leftToRight = {
  "(" : ")",
  "[" : "]",
  "{" : "}"
}

const isValid = function(s) {
  if (!s) {
    return true
  }
  // 初始化一个stack栈
}