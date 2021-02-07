import apiLogin from './interface/login'
import apiRegister from './interface/register'

// 名称只能为 install ，因为 use 只能识别使用 install
const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(  //对象拼接
          {},
          apiLogin,
          apiRegister
        )
      }
    }
  })
}

export default install