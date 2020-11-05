// es6的箭头函数，（）中写参数后加“：”加数字类型，可检测返回值类型，不报错则函数返回值正确，{}函数体
var getUserInfos = function (user) {
    return '${user.name} 性别${user sex} 就职于${user.company}';
    // return true 
};
console.log(getUserInfos({ name: '任康华', sex: '男', company: '字节' }));
