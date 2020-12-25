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
  let serverUrl = "https://2.jd.com/"
  const result = await superagent.get(serverUrl).charset('utf-8')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false })
  let hotShop = $('#app').find('.o2_page mod_container').find('.o2_floor').find('.grid_c1').find('.o2-row-flex')
  let hotList = []
  for(let i = 0; i < hotShop.length; i++) {
    let obj = {}
    // obj['shopTitle'] = $(hotShop[i]).find('.o2_tab_header').find('li').text()
    obj['shopImgUrl'] = $(hotShop[i]).find('img').attr('src')
    obj['price'] = $(hotShop[i]).find('.o2_tab_goods_item_price').text()
    obj['shopName'] = $(hotShop[i]).find('.o2_tab_goods_item_name').text()
    obj['shopUrl'] = $(hotShop[i]).next().attr('href')
    hotList.push(obj)
  }
  return{
    result,
    hotList
    // hotShop
  }
}