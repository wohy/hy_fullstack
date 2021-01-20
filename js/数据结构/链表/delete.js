// 链表的删除

// 给定一个排序的链表，删除所有重复的元素，使得每个元素值出现一次
// 1 -> 1 -> 2  输出： 1 -> 2 
// 1 -> 1 -> 2 -> 3 -> 3  输出： 1 -> 2 -> 3

function ListNode(val) {
  this.val = val;
  val.next = null;
}

const deleteDuplicates = function(head) {
  // 设定cur指针，初始值为链表的第一个节点
  const cur = head
  while (cur !== null && cur.next !== null) {
    if(cur.val === cur.next.val) {
      // 相等则跳过该指针
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

