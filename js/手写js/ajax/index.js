// 原生 js 中的接口请求 
// let xhr = new XMLHttpRequest()
// // 初始化
// xhr.open('get', 'https://api.github.com/users/github')
// // 发送请求
// xhr.send()
// // 设置状态变化回调处理请求结果
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // readyState有5种状态
//     // 0 － （未初始化）还没有调用send()方法
//     // 1 － （载入）已调用send()方法，正在发送请求
//     // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
//     // 3 － （交互）正在解析响应内容
//     // 4 － （完成）响应内容解析完成，可以在客户端调用了
//     console.log(xhr.responseText); //后端响应的结果
//   }
// }



// 基于promise 实现 ajax
function ajax(options) {
  let url = options.url
  const method = options.method.toLowerCase() || 'get'
  const async = options.async
  const data = options.data

  const xhr = new XMLHttpRequest()
  if(options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态变化的回调
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {  //状态码 表示请求成功的范围
          resolve && resolve(xhr.responseText)
        }
      }
    }
    
    // 错误的回调
    xhr.onerror = err => reject && reject(err)

    // 处理请求的参数
    let paramArr = []
    let encodeData;
    if(data instanceof Object) {
      for (let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    // get参数拼接
    if(method === 'get') {
      const index = url.indexOf('?')
      if(index === -1) url += '?'  //没问号 则在最后面拼接一个 '?'
      else if(index !== url.length - 1) {  //有问号 但不在末尾 则说明原本就拼接了东西 则加上'&'拼接参数
        url += '&'
      }
      url += encodeData
    }

    // 发送请求
    xhr.open(method, url, async)
    if(method === 'get') xhr.send(null)
    else{
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}

ajax({
  method: 'GET',
  url: 'https://api.github.com/users/github',
  async: true,
  data: {},
  timeout: 1000
}).then((res) => {
  console.log(res);
})