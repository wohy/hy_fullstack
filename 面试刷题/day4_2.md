80. 介绍下 Promise.all 使用、原理实现及错误处理

81. 打印出 1 - 10000 之间的所有对称数
  ```
  [...Array(10000).keys()].filter((x) => { 
    return x.toString().length > 1 && x === Number(x.toString().split('').reverse().join('')) 
  })
  ```
  将数组的所有key返回出来，解构出来组成 1 - 10000 的数组，过滤掉不对称的元素，通过将元素变为数组判断长度要大于1，且通过转换为字符串，再转换为数组，转置一下，在转换为字符串，最后转为 number 与 原本的值比较，若不相等则会过滤掉

82. 周一算法题之「移动零」，不改变非0元素的初始排列，将0移到数组末尾
  ```
  function zeroMove(array) {
    let len = array.length;
    let j = 0;
    for(let i=0;i<len-j;i++){
        if(array[i]===0){
            array.push(0);
            array.splice(i,1);
            i --;
            j ++;
        }
    }
    return array;
  }
  ```

83. var、let 和 const 区别的实现原理是什么
  var 声明提升 变量会到变量环境中
  let、const 声明不提升，则会有暂时性死区问题，变量保存在词法环境中
  const 声明的为 常量，值赋予后不得更改

84. 请实现一个 add 函数，满足以下功能。
  ```
  add(1); 			// 1
  add(1)(2);  	// 3
  add(1)(2)(3)；// 6
  add(1)(2, 3); // 6
  add(1, 2)(3); // 6
  add(1, 2, 3); // 6
  ```

85. react-router 里的 <Link> 标签和 <a> 标签有什么区别

86. 周一算法题之「两数之和」
  给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
  你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

87. 在输入框中如何判断输入的是一个正确的网址。
  const isUrl = urlStr => {
      try {
          const { href, origin, host, hostname, pathname } = new URL(urlStr)
          return href && origin && host && hostname && pathname && true
      } catch (e) {
          return false
      }
  }

88. 实现 convert 方法，把原始 list 转换成树形结构
  要求尽可能降低时间复杂度
  以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
  ```
  function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list) {
      if (item.parentId === 0) {
        res.push(item)
        continue
      }
      if (item.parentId in map) {
        const parent = map[item.parentId]
        parent.children = parent.children || []
        parent.children.push(item)
      }
    }
    return res
  }
  ```

89. 设计并实现 Promise.race()


90. 实现模糊搜索结果的关键词高亮显示


91. 介绍下 HTTPS 中间人攻击


92. 