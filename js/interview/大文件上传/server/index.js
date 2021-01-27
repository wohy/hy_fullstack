const http = require('http')
const path = require('path')
const fse = require('fs-extra')
const multiparty = require('multiparty')

const server = http.createServer()

// 定义一个用来存储大文件的目录
const UPLOAD_DIR = path.resolve(__dirname, './', 'target')

const reslovePost = req => {
  return new Promise((resolve) => {
    let chunk = ''
    req.on('data', data => {
      chunk += data
    })
    req.on('end', () => {
      resolve(JSON.parse(chunk))
    })
  })
}

server.on('request', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if (req.method === "OPTIONS") {
    res.status = 200
    res.end()
    return
  }

  // 接收切片
  const multipart = new multiparty.Form();
  multipart.parse(req, async (err, fields, files) => {
    if (err) return
    // console.log(req, fields, files);
    const [chunk] = files.chunk
    const [hash] = fields.hash
    const [filename] = fields.filename
    const chunkDir = path.resolve(UPLOAD_DIR, filename)

    // 切片目录不存在的话 就创建
    if (fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }
    await fse.move(chunk.path, `${chunkDir}/${hashd}`)
    res.end('received file chunk')
  })
  
  // 合成
  if (req.url === '/merge') {
    const data = await reslovePost(req)
    const { filename, size } = data
    const filePath = path.resolve(UPLOAD_DIR, `${filename}`)
    await mergeFileChunk(filePath, filename, size)
    res.end(JSON.stringify({
      code: 0,
      message: 'file merged success'
    }))
  }
})


// 合成切片
const mergeFileChunk = async (filePath, filename, size) => {
  // 存
  const chunkDir = path.resolve(UPLOAD_DIR, filename)
  //读取
  const chunkPaths = await fse.readdir(chunkDir)
  // 根据切片下标进行排序
  
}

server.listen(3000, () => {
  console.log('3000端口已经启动');
})