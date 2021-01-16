const puppe = require('puppeteer');
const $ = require('cheerio');
const { resolve } = require('path');
const { rejects } = require('assert');

async function run() {
  // 等待puppeteer的launch
  const brower = await puppeteer.launch();
  // 一个新的浏览器页面
  const page = await brower.newPage();
  await page.goto('http://juejin.cn/books', {
    waitUntil: 'networkidle0' //等到没有网络请求时，才真正进入页面
  }); //goto() 取到某个页面

  //取到页面后进行截屏
  // await page.screenshot({
  //   path: './jujin.png'
  // })

  // 在获取html是，先执行几次下拉操作
  await page.evaluate(function() { //在该页面的控制台中执行
    function req() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 让页面底部的类名为copy-right的dom结构出现在可视界面中
          document.querySelector('.copy-right').scrollIntoView();
          resolve()
        }, 2000);
      })
    }
    
    async function run() {
      for (let i = 0; i < 3; i++) {
        await req()
      }
    }
    // async 执行完 返回的就是Promise
    // run() 这个promise只有三次下拉加载操作结束（即for循环结束）才会 resolve，即promise执行完成
    // page.evaluate 将会等待 promise的完成 并返回其返回值
    return run()
  })

  // 拿到html结构
  const html = await page.content()
  // console.log(html);

  const books = $('.info', html);
  let bookInfo = []
  books.each(function() {
    const book = $(this)
    let name = $(book.find('.title')).text().trim();
    let auth = $(book.find('.author-name')).text().trim();
    bookInfo.push({
      name, auth
    })
  })
  const fs = require('fs');
  fs.writeFile('./books.json', JSON.stringify(bookInfo, null, 2), (err) => { 
    //JSON.stringify() 第一个参数，传入被作用的字符串；第二个参数，为一个回调，参数(key, value) 可拿到每个key 和 value；第三个参数为，以几个字符来格式化，一般为2更美观
    if(!err) {
      console.log('写入成功');
    }
  })
  // 关闭
  await brower.close();
}

run()