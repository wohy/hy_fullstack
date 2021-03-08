function app(params) {}
app.middleWares = []
app.use = function(callback) {
  app.middleWares.push(callback)
}

app.use((ctx, next) => {
  console.log(1);
  next()
  console.log(2);
})
app.use((ctx, next) => {
  console.log(3);
  next()
  console.log(4);
})
app.use((ctx, next) => {
  console.log(5);
  next()
  console.log(6);
})
// 打印 1 3 5 6 4 2

function dispatch(index) {

  if(index === app.middleWares.length) return

  // 先取出第一个中间件让其执行，将索引递增，调用dispatch执行下一个中间件
  let middleWares = app.middleWares[index]
  middleWares({}, () => dispatch(index + 1))
}

dispatch(0)