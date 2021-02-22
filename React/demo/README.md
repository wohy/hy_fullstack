- 目录结构 及 语法
  - src
    1. index.js 入口
      - ReactDOM.render() 方法将 app组件挂载到了index.html的 id 为 root 的dom节点上
    2. index.css 全局样式
    3. app.js 定义了一个app组件
      - 函数 app 继承 react中的Component，返回 一个html结构 利用了jsx语法
      - react中的 Fragment 分段
      - html 结构中展示一张图片、一个a标签、一句话
        jsx = js + XML
      - 返回的 html 结构最外层一定要包一层div标签
      遇到'<>' 就会被解析成 HTML
          '{}'会被解析成 js
        JSX注释代码 不是 '//'
      - js中 的'<>'
        - 用到 dangerouslySetInnerHTML API
          将html解析出来

      - label 标签
        label 上自带的属性for 在react中会报错

    4. app.css app组件的样式
    5. reportWebVitals

    - 组件拿到另一个组件中使用
      export defalut 该组件
      另一个组件 import 引入就好
      - 父子组件通信
        父：发送 content 属性
        ```<EatItem content={item} />```
        子：接收 this.props.属性名   发送什么属性接收什么属性
        ```<li>{this.props.content}</li>```
        this指的是Component

        子组件向父组件通信
        子组件不能直接修改父组件的数据源
        此demo中
        将点击想要删除的元素传给父组件 让父组件去删除该元素
        父组件将删除元素的那个方法 传递给 子组件
        子组件将想要删除的元素 作为实参传入该方法

    - 单项数据流的问题
      父组件 将数据源传给 子组件 
      子组件 无法对数据源进行更改
    - 可混合其他框架使用
      在 public中的index.html 引入
      所有的react逻辑都会挂载到 id 为 root 的节点上
      其他节点不受react影响
      但不建议混合
    - 函数式编程
      好处：
      - 代码更清晰，每一个功能都是一个函数
      - 方便测试 和 维护
    - 校验传递值
      - propType
        npm i prop-types
        安装
        import PropType from 'prop-types' 引入
  
- 