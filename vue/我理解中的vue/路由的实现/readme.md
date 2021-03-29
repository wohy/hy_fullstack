# 如何实现前端路由
1. 页面跳转url发生改变，但页面不会刷新
  - url中的哈希值 /#/xxxxxx 路径'#'其后面部分， 改变哈希值，页面是不会进行刷新的
  - 改变 url 中的 path ，也不会引起页面的刷新
  - 好处：页面不引起刷新，减少了不必要的性能消耗
2. 如何检测到url地址变了?
  - hash实现 hash.html
  改变url的操作:
    1. 浏览器的前进后退按钮
    2. <a></a>
    3. window.location 可以拿到路径的哈希值
  - history实现
  pushState 和 replaceState
    - popstate
      监听 pushState path被改变时，即可做出相应的反应
    - history.pushState() 3个参数
      第三个参数为url
      浏览器不会在调用pushState() 之后尝试加载此URL
      https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState 
# 基于Vue实现 路由

