# ```window.open(url, name, features)```
打开一个路径为 url ，名称为 name ，满足 features 特征(比如宽高)的新窗口

# javascript: 伪协议
  "真"协议用来在因特网上的计算机之间传输数据包，如 http 协议 (http://)、FTP 协议 (ftp://)
  伪协议是一种非标准化的协议
  利用伪协议，可以使用以下方式来调用 js 函数
  ``<a href="javascript:popUp('http://www.example.com/');">Example</a>``
  但浏览器需要支持 js 与 伪协议

# 内嵌事件处理函数
  ``<a href="#" onclick="popUp('http://www.example.com/'); return false;">Example</a>``
  '#' : 是一个仅供文档内部使用的链接记号(以上指令 '#' 指的是未指向任何目标的内部链接)。在某些浏览器里， '#' 链接指向当前文档的开头。把 href 设置为 '#' 是为了创建一个空链接。
  则点击以上链接，全部工作都由 onclick 负责

# 上述事件较好的处理方式
  以上方法都不能 **平稳退化**， 都需要那些浏览器能够支持 js 的功能，
  若用户是一个 **搜索机器人** 时，机器人的浏览 web  的目的是将各种网页添加到搜索引擎的数据库里，且多数的 搜索机器人无法理解 js ，所以，如果 js 网页不能平稳的退化，则他们在搜索引擎的排名就可能大受损害。
  - `` <a href="http://www.example.com/" onclick="popUp('http://www.example.com/'); return false;">Example</a> ``
  显得代码很冗长
  - 改进 ``<a href="http://www.example.com/" onclick="popUp(this.getAttribute('href')); return false;">Example</a> ``
    或者利用 DOM 提供的 this.href 属性
    ``<a href="http://www.example.com/" onclick="popUp(this.href); return false;">Example</a> ``
现在的 href 属性已经是合法值了，较之上的 **伪协议** 和 **'#'** 来说效果好得多，即使 js 被禁用这个链接还是有效的

# 向 css 学习
  将标签上的 style 分离出来，转移到外部文件中

# 分离 js
  如果有一组 a 标签
```
var links = document.getElementByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (link[i].getAtttribute('class') == "popup") {
    links[i].onclick = function() {
      popUp(this.getAttribute("href"));
      return false;
    }
  }
}
```
将以上代码封装成一个函数 在赋值给 window.onload 事件

为了兼容一些可能无法识别 DOM 方法的 浏览器
可以在获取 节点信息前加上
```if (!document.getElementByTagName) return false```


# 性能考虑
1. 尽量少访问 DOM 和 尽量减少标记
  查询 DOM 的某些元素，浏览器都会搜索整个 DOM 树，从中查找可能匹配的元素

2. 合并和放置脚本
  合并脚本，减少页面加载页面时发送的请求
  把 ``<script>`` 放在末尾 ``</body>`` 之前

3. 压缩脚本
  减少文件大小，加快加载速度
  工具： JSMin / YUI Compressor / Closure Compiler