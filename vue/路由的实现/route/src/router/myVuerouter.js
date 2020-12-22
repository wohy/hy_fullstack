class VueRouter {

}
VueRouter.install = function (vue) {

}

export default VueRouter

/** 
// Vue中会有一个_installedPlugins属性, 所有vue.use() 的组件都会装到其中，use过的组件就不需要再次use，不会被重新加载
class Vue {
  constructor () {
    _installedPlugins: ''
  }
}
// use的源码
Vue.use = function(plugin) {
  const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  // 如果存在就不会在加载了
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }

  const args = toArray(arguments, 1)
  // 在数组的头部插入
  args.unshift(this)

  if (typeof plugin.install === 'function') {
    //不能用call，args是一个数组 apply()第一个参数要是对象
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === 'function') {
    // 此时的plugin不为对象，所以得放到第二个参数，防止this的冲突
    plugin.apply(null, plugin, args)
  }
  // 把该plugin存入到installedPlugins中
  installedPlugins.push(plugin)
  // 将这个class抛出
  return this
}
*/