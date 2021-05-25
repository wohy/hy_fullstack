# 版本1
  1. 当点击某个链接是不会跳转到另一个窗口
  2. 同时观察到列表和图片
  为达到以上两点：
    1. 增加一个 “占位符” 图片，在主页上预留一块浏览区域
    2. 点击链接是拦截网页的默认行为 
    3. 点击某个链接时，把占位符的图片替换为链接中的图片
  3. 显示出每一张图片的 title 属性， 跟着图片一起变化
## 处理
  - showPic.js 改变 img 的 src 为 当前点击的图片的 src
  - 事件处理函数(event handler)
    作用：在特定事件发生时调用特定的 javascript 代码
    ``onclick = "showPic(this)"``
    将 onclick 事件绑定为 showPic 点击时即可触发
    将 this 作为参数传入即可，此时的 this 指的是当前这个标签
    可当点击时，标签的默认行为也会执行，所以根据事件执行机制，需要在 onclick 执行 showPic 后返回 false 就会默认为没有点击该标签
    ``onclick = "showPic(this); return false"``
  - **childNodes** 返回元素的所有子元素(包含所有类型的节点)组成的一个数组
  - **nodeType** 每一个节点都有该属性，返回节点类型，为一个数值
    总共 12 种可取值，有实用价值的有 3 种：
      - 元素节点的 nodeType 属性值为 1
      - 属性节点的 nodeType 属性值为 2
      - 文本节点的 nodeType 属性值为 3
  - **nodeValue** 节点的值
    p 元素中的文本是另一种节点，则 p 中的文本为，``Element.childNodes[0].nodeValue``
  - **firstChild**和**lastChild**
    firstChild: ```childNodes[0]``
    lastChild: ``childNodes[childNodes.length - 1]``

## css
- ``text-decoration: none;`` 去除 a 标签的 text 的下划线
- ``list-style: none``  去除 li 标签的 前面的 点