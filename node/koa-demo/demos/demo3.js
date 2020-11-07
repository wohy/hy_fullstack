const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
    if (ctx.request.accepts('xml')) {  //如果前端发给后端的请求头为xml
        ctx.response.type = 'xml'   //响应的类型
        ctx.response.body = '<data>Hello World</data>'
    }else if (ctx.request.accepts('html')) {  
        ctx.response.type = 'html'   
        ctx.response.body = '<p>Hello World</p>'
    }else if (ctx.request.accepts('json')) {  
        ctx.response.type = 'json'   
        ctx.response.body = '{data: Hello World}'
    }else{
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World'
    }
    //请求头不同显示的效果不同
}

app.use(main)

app.listen(3000, () => {
    console.log('success');
})