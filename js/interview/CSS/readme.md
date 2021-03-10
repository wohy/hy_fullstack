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
  行内元素：能独占一行，width 和 height 会失效，垂直方向上的 padding 和 margin 会失效

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
