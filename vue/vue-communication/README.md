# vue-communication

## 组件之间的通信
- 父组件向子组件通信，将父组件App.vue中的message属性传给子组件中的props
- 子组件向父组件通信，子组件中 .$emit('函数名', 数据源中的数据)，抛出该事件
- 兄弟组件通信，

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
