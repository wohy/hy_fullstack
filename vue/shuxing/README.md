# shuxing

## 计算属性 computed
- 进行实时计算



## 监听属性 watch
- 监听哪个数据源的变化，就以数据源名命名一个方法，定义在watch下，方法接收两个参数，一个新值，一个旧值，对接收新值进行判断，做出相应操作
- 若监听的数据源为一个对象时，就在watch下定义一个对象，
  ```
  watch: {
    XXX: function名 (newVal, oldVal) {}
  }
  ```
当XXX发生变化时，定义的函数就会执行
在对象中设置immediate属性为true，```immediate: true```表示将控制默认先自动执行一次，则此时的新值会是初始值，设置deep属性为true，```deep: true```表示深度监听
- 深度监听，此时的temperture是一个对象对其中的num进行监听
- 监听对象里的属性时可以直接使用'temperture.num'监听temperture里的num属性


## 扩展属性

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
