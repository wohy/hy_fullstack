<template>
  <div id="app">
    <input type="file" @change="handleFileChange">
    <el-button @click="handlerUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024;  //切片大小
export default {
  name: 'App',
  data() {
    return {
      container: {
        file: null
      },
      data: []
    }
  },
  methods: {
    // 读取文件信息
    handleFileChange(e) {
      console.log(e);
      const [file] = e.target.files;
      if(!file) return
      this.container.file = file
    },
    // 请求
    request({url, method="post", data, headers={}, requestList}) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method,url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response //后端响应的结果
          })
        }
      })
    },
    // 生成文件切片的方法
    createFileChunk(file, size = SIZE) {
      const fileChunkList = []
      let cur = 0
      while(cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size)})
        cur += size
      }
      return fileChunkList
    },
    // 上传切片
    async uploadChunks() {
      const requestList = this.data
      .map(({ chunk, hash }) => {
        const formData = new FormData() //FormData 为一个对象结构 拥有get append等方法 较方便
        formData.append('chunk', chunk)
        formData.append('hash', hash)
        formData.append('filename',this.container.file.name)
        return { formData }
      })
      // console.log(requestList); 每一个formData对象就是一个修饰后的切片
      .map(async ({ formData })=> {
        this.request({
          url: 'http://localhost:3000',
          data: formData
        })
      })
      await Promise.all(requestList) //并发切片 并发将requestList里的所有的切片都发送成功
      await this.mergeRequest() //通知后端可以合并切片了
    },
    
  },
  // 点击上传
  async handlerUpload() {
    if (!this.container.file) return
    const fileChunkList = this.createFileChunk(this.container.file)
    this.data = fileChunkList.map(({ file }, index) => ({ //遍历切片数组，打上标记
      chunk: file,
      hash: this.container.file.name + '-' + index
    }))
    await this.uploadChunks()
  },
  async mergeRequest() {
    await this.request({
      url: 'http://local:3000/merge',
      header: {
        "content-type": 'application/json'
      },
      data: JSON.stringify({
        filename: this.container.file.name
      })
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
