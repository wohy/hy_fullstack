const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const express = require('express')

const game = require('../game.js')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

const app = express()

app.get('/favicon.ico', function(req, res) {
  res.status(200)
  // res.writeHead(200)
  // res.send()
  return 
})
app.get('/', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/game.html', 'utf-8'))
  // fs.createReadStream(__dirname + '/game.html').pipe(res)
})
app.get('/game', function(req, res) {
  const parsedUrl = url.parse(req.url)
  const query = querystring.parse(parsedUrl.query)
    const playerAction = query.action

    if (playerLastAction && playerAction == playerLastAction) {
      sameCount++
    } else {
      sameCount = 0
    }

    if (sameCount >= 3) {
      // res.writeHead(400)
      // res.send('你作弊！')
      res.status(400)
      res.send('你作弊！')
      sameCount = 9
      return
    }
    
    const gameResult = game(playerAction)

    playerLastAction = playerAction
    if (playerWon >= 3 || sameCount == 9) {
      res.status(500)
      res.send('我再也不和你玩了')
    }

    res.status(200)
    console.log(gameResult);
    if (gameResult == 0) {
      res.send('平局')
    } else if (gameResult == 1) {
      res.send('你赢了！')
      playerWon++
    } else {
      res.send('你输了！')
    }
})

app.listen(3000, () => {
  console.log('服务已启动');
})