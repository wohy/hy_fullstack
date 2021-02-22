let getHotBooks = (async function(url) {
  const https = require('https')
  const cheerio = require('cheerio')

  let allFilms = {};

  await (function get(url) {
    return new Promise((resolve, reject) => {
      https.get(`https://xs.sogou.com${url}`, (res) => {
        let html = '';
        res.on('data', (chunk) => {
          html = html + chunk;
        })
        res.on('end', () => {
          // console.log(html);
          const $ = cheerio.load(html)
          allFilms.title = $('.info-box .infos .text-title a', this).text()
          allFilms.cover = $('.info-box .cover img', this).attr('src')
          $('.info-box .infos .field .f1').each(function() {
            
          })
            
          resolve(allFilms)
        })
      })
    })
  })(url)
  
  return allFilms
})(url)




// getHotBooks('nansheng').then(res => {
//   console.log(res);
// })

module.exports = {
  getHotBooks
}

