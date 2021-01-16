// leetcode算法题
let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {

      }
    }
  }
}

// 快手
//链表翻转
function reverseList(head) {
  // 1 2 3
  // 循环一下
  let p = head;
  let pre = null
  //链表的遍历
  while(p) {
    let next = p.next;
    // 本次循环 修改指向
    p.next = pre;
    // 同时更新当前值之前的值
    pre = p
    // 上面的next修改完毕 走到下一个 修改下一个
    p = next;
  }
  return pre
}