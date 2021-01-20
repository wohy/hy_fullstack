# vue-ssr
- .nuxt 是nuxt自动生成的
- assets、components 与 vue cli构建的相同
- layouts 用做布局的
- middlewave 存放中间件
- pages 页面
- plugins 放插件的地方
- .editorconfig 编辑器的配置

- _id.vue: 动态路由
```
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
```
校验函数
该参数要为数字，若不为数字这会返回404

- 在css页面中配置好的样式 在nuxt.config的css数组中声明一下即可全局使用

- 可创建一个app.html作为公共模板
其中的html结构会在所有页面中展示

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
