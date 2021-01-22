// 模板引擎制作 测试
const user = {
  name: 'haha',
  age: '<script src="xxxxxx"><script/>' //可能为其他人植入的恶意脚本
}
//es6拼接
const result = `<h2>${user.name}<h2/>`
const vm = require('vm')  //通过node的 vm 创建一个 runInNewContext 沙箱函数 将es6的语法转换为一个与ejs相同效果的模板

const templateMap = {
  templateA: '`<h2>${include("templateB")}<h2/>`',
  templateB: '`<p>hahaha<p/>`'
}


const context = {
  include: function(name) {
    return templateMap[name]()
  },
  helper: function() {},
  _:function(markup) {  //通过该函数完成xss过滤
    if(!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/ /g, '&nbsp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\r{0,}\n/g, '<br/>')
  }
} 

Object.keys(templateMap).forEach(key => {
  console.log(key);
  const temp = templateMap[key]

  templateMap[key] = vm.runInNewContext(
    `
    (function() {
      return ${temp}
    })
    `, context)
})

console.log(templateMap['templateA']());

// console.log(vm.runInNewContext('`<h2>${_(user.name)}<h2/>`', { //es6的模板拼接中可以执行函数 此处可执行_函数 对user.name进行xxr过滤
//   user
// }));


//  ejs
// const template = '<h2><%=user.name %><h2/>'
// ejs.render(template, user)