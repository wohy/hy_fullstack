# Puppeteer 无头浏览器
之间的爬取页面数据的方法（node-spider中的方法）是，取到后端返回的html结构的代码(即检查网页源代码，并非检查中的那个html结构，检查里的可能是js构造出来添加到网页上的，这一部分将无法被爬取)

为了解决这个弊端，需要用Puppeteer

- $ cnpm i puppeteer -S
- $ cnpm i cheerio -S

- http://puppeteerjs.com/ API文档
