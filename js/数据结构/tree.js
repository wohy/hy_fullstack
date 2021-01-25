// 数据域
// 左子树
// 右子树

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const node = new TreeNode(1)

// 先序遍历 ==           根左右
// 中序遍历 ==           左根右
// 后序遍历 == 递归遍历   左右根
// 层次遍历 == 迭代遍历

// 左子树在右子树之前遍历出来就可以

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

// 先序遍历
function preorder(root) {
  if(!root) {
    return
  }
  console.log(root.val);
  preorder(root.left)
  preorder(root.right)
}
preorder(root)