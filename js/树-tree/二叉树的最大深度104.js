var maxDeep = function(root) {
  // 没有节点了返回0
  if(!root) return 0;
  // 递
  let lh = maxDeep(root.left);
  let rh = maxDeep(root.right);
  // 归
  return Math.max(lh,rh) + 1; //会递到最后一个节点null 返回0 归时 当前根节点深度要加1
}