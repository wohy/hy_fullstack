const addLog = {
  updated () {
    console.log('数据发生变化了--混入')
  },
  methods: {
    add () {
      console.log('数据发生变化了--混入')
    }
  }
}

const app = {
  created () {
    console.log('我是拓展的created')
  },
  methods: {
    add () {
      console.log('数据发生变化了--拓展')
    }
  }
}

module.exports = { addLog, app }
