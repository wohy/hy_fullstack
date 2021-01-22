// 155题
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。



/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.stack2 = []; //备份栈 与 stack同步入栈，stack2入栈时只允许比栈顶元素小的入栈。出栈的值与stack2的栈顶相同时也stack2的栈顶也同时出栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // this.stack.pop();
  // 如果出栈的值和当前的最小值相等，那么辅助栈也要出栈
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if(!this.stack || !this.stack.length) {
    return
  }
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  // 时间O(n)
  // let minValue = Infinity
  // const { stack } = this
  // for (let i = 0; i < stack.length; i++) {
  //   if(minValue > stack[i]) {
  //     minValue =  stack[i]
  //   }
  // }
  // return minValue;

  return this.stack2[this.stack2.length - 1]

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */