// 链表中的结点存储地址是离散的，所有没有下标索引
function ListNode(val) {
  this.val = val;
  this.next = null
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)

// 1 -> 2 在中间插入3
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// 删除3
node1.next = node3.next

const arr = ['haha', 1, {a: 1}]
// 非连续的内存 为链表的形式的数组，真正的数组元素应该在一段连续的内存空间中
// 链表的插入删除操作 时间复杂度为 O(1)

// 可读取某个位置的节点时，必须从头结点开始遍历到该位置
const index = 10
let node = head
for(let i = 0; i < index && node; i++) {
  node = node.next
}
