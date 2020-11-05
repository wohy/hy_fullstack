// es6的箭头函数，（）中写参数后加“：”加数字类型，可检测返回值类型，不报错则函数返回值正确，{}函数体
const getUserInfos = (user:{name:string, sex:string, company:string}):string => {
    return '${user.name} 性别${user sex} 就职于${user.company}';
    // return true 
}
console.log(getUserInfos({name: '刘志鹏', sex: '男', company: '抖音'}))