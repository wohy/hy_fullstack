// 中端输入npm install cheerio，安装cheerio依赖

// 加载https模块，只要获取网站链接的操作，都需要加载
const https = require('https')
//加载cheerio
const cheerio = require('cheerio')
const fs = require('fs')


https.get('https://movie.douban.com/top250', (res) => {
    let html = ''
    //res.on类似于addEventListener, 用于监听数据
    res.on('data', (chunk) => {
        html = html + chunk     //返回的数据拼接到html上
  })
  //监听res数据加载完成，就执行我需要的效果
  res.on('end', () => {
    //   console.log(html);  //终端执行node index.js 能打印出页面的源代码

    const $ = cheerio.load(html)  //将整个的html都交给$，变量名$是规定的不能随意更改
    let allFilms = []            //用一个数组来保存爬到的数据

    // 查看源码取出自己想要拿到的数据的Dom结构
    $('li .item').each(function() {
        const title = $('.title', this).text()    //拿到li下的类名为item下的每一个title对应的数据,text()将其变为文本格式
        const star = $('.rating_num', this).text()
        const pic = $('.pic img', this).attr('src')  //读取src属性 


        allFilms.push({title, star, pic})  //push进一个title对象
    }) 

    fs.writeFile('./files.json', JSON.stringify(allFilms), (err) =>{
      if(!err) {
        console.log('文件写入完成');
      }
    })



  })
})