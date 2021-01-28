  # 响应式数据更新
  1. 会触发渲染 Watcher (观察者)里面的回调 vm._update 函数0，去通知页面更新
  2. 这个过程中render函数(vm._render()) 生成新的 vnode
  3. vm._update 函数就会带着新的DOM结构 去触发 __path__ 过程 (虚拟DOM和真实DOM比较)

  不能使用 v-for 中的index 作为 key, __path__ 过程会出问题

  ## __path__ 过程
   1. 利用diff算法  对比新旧节点是否是相同的节点 (isSameNode)
    - 不是相同节点 isSameNode = false，直接销毁旧的
    - 如果是相同的节点，要尽可能做节点的复用
    - 如果新newVNode是文字vnode，就直接调用浏览器的API 替换文字
    - 如果新的vnode有children子节点，旧的vnode没有，直接addvnode添加子节点
    - 旧的vnode有children，新的vnnode没有，直接removeVnode 旧的子节点

  ## diff算法
   同层比较 对比DOM树(新newVNode、旧oldVNode)
   找到变化的节点
   通知页面开始重新渲染该节点，尽可能保留其他相同的节点进行复用
   减少了vue框架的开销
   ### 核心比较：
    while循环 对新旧节点两端进行对比
    ```
    let oldStartIdx = 0 //旧首节点
    let newStartIdx = 0 //新首节点

    let oldEndIdx = oldCh,length - 1 //旧尾结点
    let newEndIdx = newCh,length - 1 //新尾结点

    function sameVnode(a, b) {
      return (
        a.key === b.key && (
          (
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)
          )
        )
      )
    }
    ```