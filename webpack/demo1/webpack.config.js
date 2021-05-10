// 与 parcel 的不同，配置繁琐
// 执行 npm run build 的时候执行的是 webpack --mode=development
// 一定会去根目录下找到 webpack.config.js 配置文件
// module node 模块化的 commonjs module.exports
// import exports es6 export default
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    }
}