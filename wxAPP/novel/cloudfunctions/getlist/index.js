// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')  // http模块
const cheerio = require('cheerio')
let charset = require('superagent-charset') // 解决乱码
let superagent = require('superagent')  // 发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://wap.biqiuge8.com/"
  const result = await superagent.get(serverUrl).charset('gb2312') // 取决于网页的编码方式
  // result里text属性是对应网址页面完整的html结构
  const data = result.text || ''
  // 用cheerio读取整个html文件，定义为一个$符，此时$代表的是整个html文件
  const $ = cheerio.load(result.text)
  // jquary 语法 找到类名为hot下的类名为image的标签  此时的hotList为一个数组
  let hotList = $('.hot').find('.image')
  let hotData = []  // 热榜
  for (let i = 0; i < hotList.length; i++) {
    let obj = {};
    // obj 中添加属性 并 赋予对应的值 
    // 找到a标签的href属性
    obj['url'] = $(hotList[i]).find('a').attr('href')
    obj['imgurl'] = $(hotList[i]).find('img').attr('src')
    obj['name'] = $(hotList[i]).find('img').attr('alt')
    // next() 找到兄弟节点
    obj['author'] = $(hotList[i]).next().find('dt').find('span').text()
    obj['detail'] = $(hotList[i]).next().find('dd').text()
    hotData.push(obj)
  }

  // 分类推荐
  let classifyList = $('.block')
  let classifyData = [] //分类
  for(let i = 0; i < classifyList.length; i++) {
    let obj = {}
    let childData = []
    let childDom = $(classifyList[i]).find('.lis').find('li')
    for (let j = 0; j < childDom.length; j++) {
      let childObj = {}
      childObj['name'] = $(childDom[j]).find('.s2').find('a').text() 
      childObj['url'] = $(childDom[j]).find('.s2').find('a').attr('href') 
      childObj['author'] = $(childDom[j]).find('.s3').text() 
      childData.push(childObj)
    }
    obj['classifyList'] = $(classifyList[i]).find('h2').text()
    obj['data'] = childData
    classifyData.push(obj)
  }




  return {
    hotData,
    classifyData
  }
}