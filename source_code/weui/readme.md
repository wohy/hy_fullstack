# weui源码分析, 并用stylus 实现

- src dist
    src 是源码目录
    dist 是编译过后的
    weui.style 入口文件

- css框架是70%常见业务
    1. reset 样式重置
    2. weui stylus中的变量是替换关系
    ```stylus
        $weuiFontEN = -apple-system-font, "Helvetica Neue" 
        // 英文字体 苹果字体
        $weuiFontSans = "PingFang SC", "Hiragino SanGB" "Microsoft YaHei"
        // 中文字体
        $weuiFontDefault = $weuiFontEN, $weuiFontSans
    ```
        中断输入
        stylus -w ./src/style/weui.styl -o ./dist/style/weui.css
    3. style mixin 可完成代 码的封装及复用
        区别于函数，
        mixin的参数赋初值的写法
        ```css
        setTapColor($c = rgba(0,0,0,0))
        -webkit-tap-highlight-color $c
        ```
