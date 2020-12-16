# vue-elm
- 接口请求 使用axios
  $ npm install axios
 import axios from 'axios'引入
 文档：http://axios-js.com/zh-cn/docs/
 - 接口请求功能封装 helpers.js
    电脑上开发是拿到接口数据，需做一个，
 - vue跨域代理  vue.config.js
    此时的'/api'就相当于直接连接到了 'http://ustbhuangyi.com/sell/'
    通过'/api/xxx'就能拿到接口上xxx上的数据
 - 封装拿到接口数据方法 api下的index.js
 - 在App.vue中引入
 import { getSeller } from '@/api'
 向接口发送请求，拿到卖家信息的数据
 直接在生命周期函数中调用getSeller()方法，传入对应的参数
- 安装第三方插件
  $ npm install query-string
  引入  import qs from 'query-string'
  格式化字符
- 拿到数据后将数据传到各个子组件展示
  - 父组件与子组件通信
  父组件v-header上绑定:seller="seller"
  子组件header中，通过props接收
  ```
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  }
  ```
  通过seller.xxx拿到各个属性进行展示，切记动态数据需要通过':'绑定
  当请求接口数据没有vue渲染快时，需绑定v-if工具，当属性有效，即已经请求到数据是，再进行渲染
  ```
  <div class="support" v-if="seller.supports">
    <support-ico :size=1 :type="seller.supports[0].type"></support-ico>
    <span class="text">{{seller.supports[0].description}}</span>
  </div>
  ```
- backdrop-filter 背景图虚化

- 为了控制Header-detail不显示，需绑定一个v-show，值为false,要控制点击一下header，Header-detail才会显示出来，点击colse ×，会关闭显示，这绑定点击事件
```<header-detail :seller="seller" v-show="detailVisible" @hide="hideDetail"></header-detail>```
此时由于colse在子容器header-detail上，所以绑定的点击事件要改变父容器detailVisible的值，需与父容器通信，点击close时
触发事件
  this.$emit('hide', false)
通过hide抛出一个false
父容器中，@hide="hideDetail"接收并给其改一个方法名为hideDetail，并在该方法中通过一个参数e来接收子容器抛出的false,将e值赋给detailVisible
  ```
  hideDetail(e) {
      // console.log(e); //false
      this.detailVisible = e
    }
  ```
由于header-detail在header中当点击colse时同时也点击到了header,所以就要想办法使只点击到子容器  
- 点击事件 仅点到子容器，而不点击到父容器，则在点击事件后加一个.stop
  如，```<div class="detail-close" @click.stop="hide">```

- 路由按需加载
  除了首页外其他路由路径的引入可以直接由方法引入
  ```
  component: () => import('@/views/comment/comment')
  ```

- Vue中处理异步
  this.$nextTick()方法, 执行一个回调，将需要在dom渲染完成后, 才能正常进行的异步步骤放入到函数体中

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
