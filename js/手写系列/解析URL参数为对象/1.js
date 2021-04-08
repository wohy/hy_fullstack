function parseParam(url) {
  // 将问号后面的字符串取出来
  const paramStr = /.+\?(.+)$/.exec(url)[1];
  // 将字符串以 & 分割后保存到数组中
  const paramsArr = paramsStr.split('&')
  let paramsObj = {}
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理那些有 value 值的参数
      // 将 key 和 value 分开来 
      let [key, val] = param.split('=');
      // 对 val 进行解码
      val = decodeURIComponent(val);
      // 判断是否转为数字
      val = /^\d+$/.test(val) ? parseFloat(val) : val

      // 如果对象有这个 key 的话，则可直接添加一个值
      if (paramsObj.hasOwnProperty(key)) {

        paramsObj[key] = [].concat(paramsObj[key], val);

      } else {
        // 没有这个 key 的就创建一个，并将该 val 存入
        paramsObj[key] = val;
      }
    } else {
      // 处理没有 value 的参数，使用一个 key 来存储
      paramsObj[param] = true;
    }
  });
}



// encodeURIComponent 和 decodeURIComponent 方法
// let url = 'http://w3cschool.com'

// let a = encodeURIComponent(url)
// console.log(a); // http%3A%2F%2Fw3cschool.com

// let b = decodeURIComponent(a)
// console.log(b);  // http://w3cschool.com