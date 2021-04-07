// 用 堆 实现 队列
class maxHeap {
  constructor(arr = []) {
    this.data = arr;
    this.size = arr.length;
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  _parent(index) {
    return Math.floor((index - 1) / 2)
  }

  _leftChild(index) {
    return 2 * index + 1
  }

  _rightChild(index) {
    return 2 * index + 2
  }
}