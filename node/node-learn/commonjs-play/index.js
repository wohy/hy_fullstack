var playerAction = process.argv[process.argv.length -1]  
// 终端执行：node game.js + 自己的行为， 该操作取出argv数组中的最后一项 即为用户输入的行为
const game = require('./libs')

const result = game(playerAction)
console.log(result);

// 获取进程的标准输入
let count = 0;
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log(result);
    if (result == -1) {
        count ++
    }
    if (count == 3) {
        console.log('你太厉害了，我不跟你玩了');
        process.exit() //结束进程
    }
})