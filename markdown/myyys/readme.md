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