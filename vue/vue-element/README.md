# vue-element
- vscode打开一个vue文件夹，命令输入 vue create 项目名 ，加载完后，通过键盘上下键控制选择vue版本，选择好后vue脚手架就开始帮我们构建项目的环境基本框架，此时在vue文件下就会有创建好一个刚刚命名的项目

- 直接可用vscode打开项目，无需执行cd，打开后在终端输入命令：npm run serve, 之后vue开始帮我们编译vue语法，使其能使浏览器读懂的html、css、和js文件，执行完成后，此时直接点击创建出的本地地址下的页面，即可看到vue帮我们搭建好的页面

- 终端输入 npm run serve 可再次跳转页面

## 最初始的vue
- node_modules       脚手架安装的依赖
- package.json       能看到项目创建了哪些依赖
- package-lock.json  依赖的说明
- babel.config.js    babel的配置项
- .gitignore         1和3行之间标明的东西，在打包提交时是不参与的，则提交项目时node_modules不会被提交
- public             其中有一份html文件，vue中只有一个html文件(单页应用)，还有一个icon，src里所有东西都被打包到html的div容器中
- src                assets 放一些静态资源      components 组件，可以用到任何页面       main.js 将APP.vue引入，将其传入到render中进行编译，编译为浏览器能读懂     APP.vue 其中的template下即html，script即js，style即css，HelloWorld标签来源于import引入的components下的HelloWorld.vue组件
- 单页面应用，当第一个页面加载出来后，页面中要跳转的其它页面会全都加载好，页面跳转，通过路由从一个div容器跳转到另一个div容器

## 组件的使用
1. 在components中定义好组件
2. 引入到App.vue中，import 标签名 from '组件路径'
3. 在default中声明组件，components: { 标签名 }
4. 此时的组件就可以作为一个标签在template中使用

## 路由的使用
1. 终端输入命令 npm install vue-router --save-dev 安装好 vue-router
2. 在main.js 中引入 ```import Router from 'vue-router' ```，其中Router为自己取的名字，来接收vue-router，从node_modules中引入不需要写路径，脚手架以及构建好了
3. Router出自vue,则可不用再use，可直接写到new Vue中, 为方便对router进行操作，这里专门在src下建立一个文件夹router，通过里面的index.js对其进行操作，则在index.js中需引入vue和vue-router，Vue.use(Router)
最后还需抛出Router这个实例化对象， ```export default new Router({})``` 这是在main.js中的引入则需指明router的路径
4. 这时可在App.vue中使用<router></router>标签
5. 开始在router的index.js中开始配置router, 指定好其path、component，path设为'/'即为该根目录，打开不做任何操作显示的页面，设置为什么路径，路由入口所在页面的to''就会跳到那个页面
6. 配置某个路由的子路由，在index.js中的某个路由配置children属性，属性值这为该路由下的子路由，子路由路口引入到该路由的.vue下

7. 路由传参：
  - 通过route的name属性进行路由跳转，设置其params对其传参
  ```
  <router-link :to="{name:'Detail', params:{username: '张三'}}">张三</router-link>
  ```
  to为router-link的一个属性，会动态的改变，所以需要通过':',即'v-bind'进行绑定
  在页面上通过{{$route.params.username}}进行展示
  
  - 通过在路由配置时在path后加上一个参数xxx，如path:'/detail:xxx'，传参时，只需在       name:'Detailxxx',此时的xxx会自动认为是传入的参数
  在页面上通过{{$route.params.xxx}}取到参数xxx进行展示

  - this.$router.push({path: '/', query: { id: 123 }})
  完成页面的跳转，并可转入一个query参数，在首页页面上{{$route.query.id}}即可拿到传入的参数进行展示，点击刷新，页面上接收的参数依然会显示
  然而，此时跳往的页面地址后会加上?id='123'的后缀，而暴露出来，不够安全
  所以需用name属性来完成指定页面的跳转，这里跳转到Home页面，使用params来传递参数
    - this.$router.push({name:'Home', params: { id: 1234 }})、
    此时接收时使用{{$route.params.id}
    可点击刷新后，页面上接收到的参数将消失


8. 路由的重定向
  - 在路由配置中加一个redirect属性，值为重定向的路径
  ```redirect: '/login'``
  加载失败，页面跳到根路径下的login页面
9. 路由别名
  - alias属性
  配置时加上，如alias:'/hello', 实际上是Detail，没有hello这个路径，但to='/hello',也会跳到hello页面
10. 路由跳转动画
  transition组件
  将路由入口标签放在transition标签内部，并给transition一个name属性值为xxx
  在通过样式来实现跳转动画
  - .xxx-enter 为动画进入前的状态
  - .xxx-leave 为动画离开后的状态
  - .xxx-enter-active 动画进入的时候 
  - .xxx-leave-active 动画离开的时候
  CSS样式里的transition 指过渡 某个属性发生变化时 给点时间去过渡
11. 路由的钩子函数
  - beforeEnter: (to, from, next) => { 
      console.log(to);
      console.log(from);
      next()
    }  //回调函数  

12. vue中的this
- main.js中的
render: h => h(App),
使每一个.vue界面都有了一个Vue的实例
所以面向对象的方法中的this会指向Vue实例 

