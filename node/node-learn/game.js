//  石头剪刀布
// console.log(process.argv);

// var playerAction = process.argv[process.argv.length -1]  
// 终端执行：node game.js + 自己的行为， 该操作取出argv数组中的最后一项 即为用户输入的行为



module.exports = function(playerAction) {
    // 电脑随机生成剪刀、石头、布
var random = Math.random() * 3;
if (random < 1) {
    var computerAction = 'rock'
}else if (random > 2) {
    var computerAction = 'scissor'
}else {
    var computerAction = 'paper'
}

// 进行比较
console.log(computerAction);
if (computerAction === playerAction) {
    return 0
} else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
    return 1
}else {
    return 2
}
}