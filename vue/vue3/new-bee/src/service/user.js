import axios from '../utils/axios'

// 注册函数
export function register(params) {
  return axios.post('/user/register', params)
}

// 登录函数
export function login(params) {
  return axios.post('/user/login', params)
}

// 获取头像
export function getUserInfo() {
  return axios.get('/user/info')
}