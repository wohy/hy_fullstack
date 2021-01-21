function a() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log('aaa');
      reslove();
    }, 1000);
  })
}

function b() {
  setTimeout(() => {
    console.log('bbb');
  }, 500);
}

function c() {
  setTimeout(() => {
    console.log('ccc');
  }, 200);
}

a().then(() => {
  b()
  return 'ok';
}).then((res) => { //能拿到上一个.then返回出来的东西
  c()
  console.log(res);
})
