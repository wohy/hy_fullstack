function render(template, data) {
  // 模板字符串正则
  const reg = /\{\{(\w+)\}\}/;

  //首先判断模板里是否有一个模板字符串的字段
  if (reg.test(template)) {
    // 查找当前模板里第一个模板字符串的字段
    const name = reg.exec(template)[1];
    // 将第一个模板字符串渲染
    template = template.replace(reg, data[name]);
    // 去递归 重复以上操作
    return render(template, data);
  }

  // 如果模板没有模板字符串直接返回
  return template;
}

// 测试
let template = '我是{{name}}，年龄{{age}}， 性别{{sex}}';
let person = {
  name: '小明',
  age: 18,
  sex: '男'
}
console.log(render(template, person));