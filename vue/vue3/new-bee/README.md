# 插槽
- v-slot 
```
  <div id="app">
    <router-view class="router-view" v-slot="{Component}">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
```

```
  <transition:name="transitionName">
    <component :is="Component">
  </transition>
```

router-view这个路由入口中，允许你再放组件进来

- 配路由
  Home为首页 {path: '/', redirect: '/home'},
  {
    path: '/home', name: 'home', component: Home, 
    meta: {index: 1} 
  }

- axios 进行接口请求  utils 下进行封装
  - 有些接口请求 需要在登入的情况下
    请求头加上一个字段
  - 请求
  - 响应 拦截

- 使用 axios 做接口请求 封装成一个函数 抛出 service 下的 home.js

- 首页Home.vue 商城的 轮播图 调用 gethome 方法 获取接口中返回轮播图中的商品

- 封装一个 商品列表 组件  GoodsList.vue
  三个模块的结构都相同 考虑将其封装成组件使用

- 登录页面 Login.vue
  - 头部 功能 写成组件 SimpleHeader.vue
  - 验证码做成了组件 VueImgVerify.vue
  使用 canvas 实现

- axios 封装 注册账号