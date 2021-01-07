// function getConstant() {
//   return 1
// }

// async function getAsyncConstant() {
//   return 1
// }

// async function getPromise() {
//   return new Promise((resolve, reject)  => {
//     resolve(1)
//   })
// }

// async function test() {
//   let a = 2
//   let c = 1
//   await getConstant()
//   let d = 3
//   await getPromise()
//   let e = 4
//   await getAsyncConstant()
//   return 2
// }
// test()

function getConstant() {
  return 1
}

async function getAsyncConstant() {
  return 1
}

function getAsyncConstant() {
  return Promise().resolve().then(function() {
    return 1
  })
}

