// const buffer1 = Buffer.from('wn');
// const buffer2 = Buffer.from([1, 2, 3, 4])

// const buffer3 = Buffer.alloc(20)  //20个 00，类似Array(20)创建20个empty数组空间


// console.log(buffer1);
// console.log(buffer2);
// console.log(buffer3);

// buffer2.writeInt8(12, 1)
// console.log(buffer2);
// buffer2.writeInt16BE(512, 2)
// // buffer2.writeInt16LE(512, 2) 
// console.log(buffer2);

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/buffer.proto', 'utf-8'))

console.log(schema);

// 编码之后的buffer流
const buffer = schema.Clomn.encode({
  id: 1,
  name: 'Node.js',
  price: 80.4
})

console.log(schema.Clomn.decode(buffer)); //解码  price会出现精度丢失