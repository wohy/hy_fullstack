# node 与 express 开发
# 旅游网站 Meadowlark Travel 开发实战

# static 中间件
- 中间件是按顺序处理的，static 中间件---常常是第一个或至少是非常早声明的---会覆盖其他路由。
  如果在 static 指定的静态资源目录中（public），放置了一个 index.html 文件，页面展示的是这个 html 文件，而不是配置的当前路由下的文件
