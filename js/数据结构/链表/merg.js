// 链表的合并

// 将两个有序链表合并成一个新的有序链表并返回，新链表是通过拼接给定的两个链表的所有节点组成的
// 1 -> 2 -> 4  1 -> 3 -> 4     输出： 1 -> 1 -> 2 -> 3 -> 4

// 思路：处理链表的本质就是处理链表节点之间的指针关系

function ListNode(val) {
  this.val = val;
  val.next = null;
}

const mergeTwoLists =  function(l1, l2) {
  // 定义一个头结点，确保链表可以访问到
  // 指针
  let head = new ListNode();
  let cur = head;
  // 开始穿针引线
  while (l1 && l2) {
    if(l1.val <= l2.val) {
      cur.next = l1;
      // l1 的指针向前移一步
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    // 每穿完一次，cur的指针也往后移一位
    cur = cur.next
  }
    // 链表长度不等 把较长链表剩下的部分全部放到新链表中
    cur.next = l1 !== null ? l1 : l2
  
    return head.next
}

let l1 = { val: 1, next: { val: 2, next: {val: 4, next: null}}}
let l2 = { val: 1, next: { val: 3, next: {val: 4, next: null}}}
mergeTwoLists(l1, l2)