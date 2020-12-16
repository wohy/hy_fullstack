export default {
  method: 'post',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {},
  timeout: 10000,
  withCredent: false,  //携带凭证
  reponseType: 'json'  //响应的格式
}