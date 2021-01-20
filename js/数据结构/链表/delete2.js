// 给定一个排序链表删除所有的含有重复数字的节点，只保留原始链表中没有重复出现的数字

// 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5  输出：1 -> 2 -> 5
// 1 -> 1 -> 1 -> 2 -> 3  输出：2 -> 3

const del = function(head) {
  // 定义一个假节点
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy

  if(!head || !head.next) {
    return head
  }

  // cur后面必须要有两个节点
  while(cur.next !== null && cur.next.next !== null) {
    // 比较两个节点的值
    if(cur.next.val === cur.next.next.val) {
      // 记录重复的值
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        // 删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next;
} 