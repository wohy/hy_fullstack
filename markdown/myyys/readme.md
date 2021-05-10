- 在提交代码前需要注意什么
    1. check 一下代码 bug 的代码不能提交
        review 一下代码
        git 怎么 review 代码？
        $ git init
        $ vi unique.js
        i
        const unique = (arr) => {
            // 完成一个数组去重
            // Array.from 解决伪数组 转化为 数组 
            return Array.from(new Set(arr))

            // return [...new Set(arr)]; 此处再次修改
        }
        :wq 退出
        node unique.js 执行
        $ git add unique.js
        $ git commit -m "unique with set"
        $ git diff unique.js 可观察到较上一次提交的代码的变化
        确认后再 $ git add unique.js
        $ git commit -m "unique with Array.from to ..."


    2.  测试驱动开发 mocha

## 如何用 markdown 表达代码跟上一个版本的区别？
```diff
const unique = (arr) => {
- return Array.from(new Set(arr))
+ return [...new Set()]
}
```

## todoList 功能
项目目标
- [首页搜索] 待完成
- [x] 首页 swiper
- [ ] ~~icon未完成~~

## markdown 的 展开
- <img src="xxx" width="300"> 加载出图片，支持 html 格式，可以添加行内 width 之类的样式
![](xxx) 将路径放入到 () 中

- 点击展开
<details>
<summary>展开查看规范</summary>
这是展开后的内容1
</details>

