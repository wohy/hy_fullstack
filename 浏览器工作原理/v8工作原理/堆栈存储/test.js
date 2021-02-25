let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  }
}

function copy(src) {
  // console.log(typeof src);
  if(typeof src !== 'object') return
  let dest = src instanceof Array ? [] : {}
  for(key in src) {
    if(src.hasOwnProperty(key)) {
      if(typeof src[key] === 'object') {
        dest[key] = copy(src[key])
      } else {
        dest[key] = src[key]
      }   
    }
  }
  // 实现拷贝代码，将src的值完整的拷贝给dest
  return dest
}

let jack2 = copy(jack)
// console.log(jack2);
jack2.like.dog.color = 'green'
// jack2.name = 'wn'
// console.log(jack);
console.log(jack.like.dog.color); // black