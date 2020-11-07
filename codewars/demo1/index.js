// function generateHashTagCapitalString(str) {
// return str.length > 140 || str == ''? false : '#' + str     //前面添加‘#’
//              //因为两个方法都有返回this，可以启用级联
//              //以空格‘ ’为分隔符将字符串分开
//             .split(' ')
                        
//             //es6中数组的新方法，他会遍历数组的每一项，并用一个函数处理
//             //处理完后返回一个新的数组
//             .map(function(word) {
//                 // return word.toUpperCase()
//                 word.charAt(0).toUppercase() + word.slice(1)  //找到一个字符串的第一个字符改为大写后，加上第一个字符后的其他字符，即可仅将第一个字符大写后面的字符保留小写
//             })  
//             //将数组元素结合为一个字符串，以空格为分隔符
//             .join(' ')   
// }
function  generateCapitalStringWithHashTag(str) {
    return str.length > 140 || str == ''? false : 
    '#' + str.split('').map(capitalize).join('') 
}
function capitalize(str) {
    return str. word.charAt(0).toUppercase() + word.slice(1);
}