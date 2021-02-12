// const cors = require('koa2-cors');
async function getHotBooksasync(url) {
  const https = require('https')
  const cheerio = require('cheerio')

  let allFilms = [];

  await (function get(url) {
    return new Promise((resolve, reject) => {
      https.get(`https://xs.sogou.com/${url}/`, (res) => {
        let html = '';
        res.on('data', (chunk) => {
          html = html + chunk;
        })
        res.on('end', () => {
          // console.log(html);
          const $ = cheerio.load(html)
          $('.sx-ret .filter-ret li').each(function () {
            const title = $('.info h3 a', this).text()
            const auth = $('.info .d1', this).text().split("：")[1].split('更新章节')[0]
            const cover = $('.cover img', this).attr('src')
            const href = $('.cover', this).attr('href')
            const desc = $('.info .d2', this).text()
            allFilms.push({ title, auth, cover, href, desc })
          })
          resolve(allFilms)
        })
      })
    })
  })(url)
  
  return allFilms
}






// module.exports = {
//   getHotBooks
// }

