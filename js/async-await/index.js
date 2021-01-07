// asy/await 的原理是什么？把下面代码翻译成Promise形式 

function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(2);
      resolve(2)
    }, 2000)
  })
}
async function testAsync() {
  await getJson()
  console.log(3);
}
testAsync()