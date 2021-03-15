Snabbdom 的核心并不能处理元素的属性、样式、事件等，可以使用模块去处理
  - Snabbdom 官方提供的6个模块
    1. attributes 
      - 设置 DOM 元素的属性，使用 setAttribute()
      - 处理 布尔类型 的属性
    2. props
      - 和 attributes 模块相似，设置 DOM 元素的属性 ``` element[attr] = value ```
      - 不处理布尔类型的属性
    3. class
      - 切换类样式
      - 给元素设置类样式是通过 sel 选择器
    4. dataset
      - 设置 data-* 的自定义属性
    5. eventlisteners
      - 注册和移除时间
    6. style
      - 设置行内样式，支持动画
      - delayed 、 move 、 destory
  - 模块使用 
    导入 --> init注册模块, init接收的参数[]，可注册模块 --> 使用 h() 函数创建 VNode 的时候，可以把第二个参数设置为对象，其他参数往后移