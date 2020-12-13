import axios from 'axios'

const  baseUrl = '';

// 将获取接口功能封装到一个get函数中抛出
export function get(url) {
  // 返回一个函数，闭包
  return function(params = {}) {
    // axios.get()，接收两个参数，一个是接口地址，一个是参数params类似于与接口绑定的密码...
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {  //获取成功后.then()res来接收结果，不成功.catch()抛出异常err
      // 将res.data里的data和errno解构出来
      const { errno, data } = res.data
      // errno为0返回data
      if (errno === 0) {
        return data
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

