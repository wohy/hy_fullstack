import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'


// node中 用于获取环境变量 process.env.NODE_ENV 后面为自定义的域名 会统一加https
axios.defaults.baseURL = process.env.NODE_ENV == 'developement' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
// axios 请求头 格式 XMLHttpRequest 
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 登入成功后 后端会返回一个 token 字段，将这个token字段拼接到请求头上去，保存到本地。发起接口请求时，通过判断请求头是否含有token字段，来辨别是否已经登入
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// 设置 post 请求头格式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截 错误时弹出提示
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常!')
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode == 416) { // 登录过期
      // 通过路由 跳转到 登录页面
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios