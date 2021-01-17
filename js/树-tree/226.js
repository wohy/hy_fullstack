// 完成树的遍历
// root代表当前遍历到的节点

var inverTree = function (root) {
  if(!root) return root;
  // 交换左右子树的值
  [root.left, root.right] = [root.right, root.left]
  inverTree(root.left);
  inverTree(root.right);
  return root;
}
inverTree(root)