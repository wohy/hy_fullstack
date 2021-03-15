- 盒模型
  从内到外
  margin -> border -> padding -> content
  width、height 为 content 的宽、高

  IE 盒模型的宽高值的是
  在标准而模型的基础上：content的width + padding + border
  即 宽高包括了padding 与 border

- 画0.5px 的边框
  transform：scale(0.5); +
  meta设置为 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  border-image

- link 标签和 import 标签的区别
  <link href=""/>
  与
  @import
  link 是 html 标签 加载时间同时加载
  @import 是 CSS 提供的
  @import 引入的CSS是等到页面被加载完后再加载
  link 没有兼容性问题，而 @import 必须在 IE5 以上
  link 的权重高于 @import

- trasition 与 animation 的区别
  transition 写过渡动画 触发一个事件才会改变属性
  transition 是两帧两帧的运行 from...to...
  animation 不需要触发任何事件 一帧一帧的 更细腻

- flex 布局
  又叫弹性布局
  让布局更加灵活
  传统布局依赖 display position float，比如简单地展现垂直居中没flex那么方便
  布局也比较方便
  flex-direction: row | column 主轴方向
  flex-wrap: nowrap | wrap 决定换行规则

- BFC
块集格式上下文，是一个独立的渲染格式，有一定的布局规则
BFC区域不会与 float box重叠
BFC 是页面上的一个独立容器，子元素不会影响外面
计算BFC区域高度时，浮动元素的高度也会参与计算
创建BFC：
    display: grid / flex / flow-root / table-cell / table类的
    元素的 float 不为 none
    position: absolute / fixed

- 垂直居中方法
  position
  display: flex
  margin (知道自己父容器的宽高)
  table-cell (父设置为) vertical-aligin: middle(子容器设置为)

- js动画 与 CSS动画的差异
  渲染线程 分为 main thread(主线程) 和 compositor thread(辅线程)
  如果 CSS 动画只改变 transform 和 opacity 时，
  CSS 动画得以在 compositor thread 完成
  而 js 动画一定会在 main thread 执行
  区别：
    js 比 css 大
    css 比 js 更简单，性能会更好
    对帧表现不好的低版本浏览器，CSS3 可以做到降级
    css 动画有天然的时间支持
    CSS3 有兼容性问题

- 块级元素 和 行内元素
  块级元素：独占一行 会自动填充满父元素
  行内元素：不能独占一行，width 和 height 会失效，垂直方向上的 padding 和 margin 会失效

- 多行文本的省略号
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient
  overflow: hidden

- 清除浮动
  1. 使用带 clear 属性的空元素
  2.  overflow: hidden
  3.  给浮动的父元素添加浮动
  4. css 的 伪元素
  如
    .clearfix::after{
      content: '';
      display: block;
      clear: both;
    } 

- CSS3的新特性


- CSS选择器有哪些？优先级呢？
id 选择器，class 选择器，标签选择器，伪元素选择器(::after)，伪类选择器(:hover)，属性选择器
important > 内联样式 > 外部样式 > 浏览器用户自定义 > 浏览器默认样式
行内样式 > id样式 > class样式 > 标签名样式


- 三栏布局
圣杯布局、双飞燕布局
  三列布局：
  1. display: flex; flex: 1
  2. 两列定宽，一列自适应
  3. diplay：table
  4. display: grid
  http://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html

  圣杯布局
  双飞燕布局

- display：table 和 table 本身 有什么的区别
  display：table 是把 html元素和它的 子节点 像 table 一样使用，但文件会比 table 小 的格式
  table 标签不够简洁，层叠过深

- position 的属性有哪些值
  relative ，abosloute(relative相对定位，相对自己；，abosloute绝对定位，相对于最近的relative属性的元素)；fix(相对windows固定定位)，flex

- 设置一个元素的背景色，背景色会填充那些区域
  会把 border 及 border之内的 会被填充

- inline-block，inline 和 block 的区别；为什么 img 的 display 是 inline 但可以设计宽高
  block 块集可以设置宽高 padding， margin 都有效，默认前后都会带上换行符，所以会单独占一行

  inline 行内不可以设置宽高，垂直方向上的 padding和margin 失效

  display：inline-block；可以让元素具有块级元素和行内元素的特性：既可以设置长宽，可以让padding和margin生效，又可以和其他行内元素到同一行。

  为什么 img的 display 是 inline 但可以设计宽高？
  这涉及 CSS 可替换元素 的概念了
  可替换元素（replaced element）的展现效果不是由 CSS 来控制的。
  这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。
  简单来说，它们的内容不受当前文档的样式的影响。
  CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。
  例如 <iframe> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。
  <iframe>、<video>、<embed>、<img>、以及将 input 声明为 image 格式时
  这些元素有一个共性，就是他们的内容都不是通过在标签内添加文本，而是通过某个属性（src、data（<object>）、label（<option>）或js控制（<canvas>））来显示内容的。
  可替换元素拥有内置宽高，他们可以设置width和height。
  他们的性质同设置了display:inline-block的元素一致。


- 重绘 和 回流(重排)

- CSS三角形
  transparent：设置为透明色
  将容器的宽高设置为 0
  再设置 border-width：上右下左
  以及 border-color：不显示的就设置为 transparent 透明色

- 动画
  