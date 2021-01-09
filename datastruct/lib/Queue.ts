interface QueueObj {
  [propName: number]: any
}

export default class Queue {
  private count: number; //元素数量
  private lowestCount: number;
  private items: QueueObj;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};  //json object 查找效率为 O(1)
  }

  // 返回队头
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  enqueue(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }
  isEmpty() {
    return this.count - this.lowestCount == 0
  }
  toString() {
    if (this.isEmpty()) {
      return ""
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
  dequeue() {
    // 如何实现先进先出 FIFO
    // ts datastruct 有态度
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
}