# BOM 浏览器对象模型
## BOM 的和核心对象是 window 对象
  1. window 既是 JavaScript 访问浏览器的窗口的一个接口；
  又是 ESCMAScript 规定的 Global 对象

### Global 对象的角色 全局作用域
  1. 全局作用域中声明的方法都会变为 window 对象的属性和方法。
  都可以通过 window.xxx 去访问

  2. 全局变量不能通过 delete 删除，而直接在 window 对象上的定义的属性可以通过 delete 删除

### 窗口关系 及 框架
如果页面包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中。
在 frames 集合中可以通过数值索引(从 0 开始，从左到右，从上到下)，如 ``window.frames[0]``
或者框架的名称直接访问相应的 window 对象。如，设置 框架的 ``name``属性为``name = "topFrames"``，则可以通过``window.frames["name"]``来访问，该框架
每个 window 对象的 name 属性，其中包含了框架的名称。
#### top 对象
``top`` 对象 始终指向最高(最外)层的框架，也就是浏览器窗口。
window 对象指向的都是那个框架的特定实例，而非最高层的框架。
使用 top 引用框架 ``top.frames[0]`` 1、2、3等
#### 与 top 相对的另外一个 window 对象，parent 对象
始终 指向当前框架的直接上层框架
在没有框架的情况下，parent 一定等于 top(此时他们都等于 window)
#### 与框架相关的最后一个属性 self
他始终指向 window，实际上 self 和 window 都可以互换使用
引入是为了与 parent 和 top 对象对应

他们都是 window 对象的属性，window 下有这些属性，但是一个框架 本身也有这些属性和 window

### 窗口位置

### 窗口大小

### 导航和打开窗口

### 间歇调用和超时调用

### 系统对话框


## location 对象
最有用的 BOM 对象之一
提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能
既是 document 对象的属性，又是 window 对象的属性
它将 URL 解析为独立的片段，可以通过不同的属性来访问这些片段
属性：
  1. hash 
    返回 URL 的 hash 值
  2. host 
    返回服务器 和 端口号
  3. hostname
    返回不带端口号的服务器名称
  4. href
    返回当前加载页面的完成 URL，而 location 对象的 toString 方法也返回这个值
  5. pathname
    返回 URL 中的目录和文件名
  6. port
    返回 URL 中指定的端口号
    如果 URL 中不包含端口号，则这个属性返回空字符
  7. protocol
    返回页面使用的 协议 http：或 https：
  8. search
    返回 URL 的查询子串 这个子串以问号开头
    即 query

### 位置操作

## navigator 对象
  访问浏览器的一些信息

### 监测插件

### 注册处理程序

## screen 对象
  用来表明客户端的能力
  其中包括浏览器窗口外部的显示器信息，如像素宽度和高度等


## history 对象
  保存着用户上网的历史记录，从窗口打开的那一刻算起
  heistory 是 window 对象的属性，因此每个浏览器窗口、每个标签页乃至每个框架，都有自己的 history对象与特定的 window 对象关联

  go() 方法 实现前进和后退
  history.go(-1) 后退一页 一次类推
  传入字符串，跳转到最近的 xxx 页面

  前进后退 也可直接使用 history.back() history.forward()



