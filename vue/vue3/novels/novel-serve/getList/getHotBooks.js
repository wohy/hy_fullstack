
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

https.get("https://xs.sogou.com/nansheng/", (res) => {
  let html = '';
  res.on('data', (chunk) => {
    html = html + chunk;
  })
  res.on('end', () => {
    // console.log(html);
    let allFilms = [];
    const $ = cheerio.load(html)
    $('.sx-ret .filter-ret li').each(function () {
      const title = $('.info h3 a', this).text()
      const auth = $('.info .d1', this).text().split("：")[1].split('更新章节')[0]
      const cover = $('.cover img', this).attr('src')
      const href = $('.cover', this).attr('href')
      const desc = $('.info .d2', this).text()
      allFilms.push({ title, auth, cover, href, desc })
    })


    fs.writeFile('./boysBooks.json', JSON.stringify(allFilms), (err) =>{
      if(!err) {
        console.log('文件写入完成');
      }
    })
  })
})



// let bookList = getHotBooks('nansheng')

// console.log(bookList);
// setTimeout(() => {
//   console.log(bookList[1].auth);
// }, 3000)

// export default {
//   getHotBooks
// }