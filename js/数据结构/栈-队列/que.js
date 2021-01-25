// 使用栈来实现队列的以下操作
// push(x)
// pop()
// peek() //返回首部元素
// empty() //返回队列是否为空

// var queue = new MyQueue()
// queue.push(1)
// queue.push(2)
// queue.peek() //1
// queue.pop() // 1
// queue.empty() //false

const MyQueue = function() {
  // 想办法让栈底的元素优先被取出来，出栈序列被逆序
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
}

MyQueue.prototype.pop = function() {
  // stack2 为空时 让stack1中的元素 移到 stack2 中
  if(this.stack2.length <= 0) {
    // 如果stack1 不为空时 一直出栈 移到 stack2中
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  // 此时 stack2 的栈顶元素，就为stack1的栈底元素  即为我们MyQueue构造出队列的头部
  return this.stack2.pop()
}

MyQueue.prototype.peek = function() {
  if(this.stack2.length <= 0) {
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  const stack2len = this.stack2.length;
  return stack2len && this.stack2[stack2len - 1]
}

MyQueue.prototype.empty = function() {
  return ! this.stack1.length && ! this.stack2.length
}