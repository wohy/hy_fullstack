function Archiver() {
  let value = null, archive = [];
  // 通过defineProperty来创建一个num属性，则defineProperty可通过其get、set属性去监控obj中num的改变
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作');
      return value
    },
    set: function (newValue) {
      console.log('执行set操作');
      value = newValue
      // 将render放在这里，可实现通过数据驱动页面的效果，当值发生改变时，页面会重新开始渲染
      archive.push({val: newValue})
    },
  })
  this.getArchiver = function() {
    return archive
  }
}

// obj.num = 2
// console.log(obj.num);

let arc = new Archiver()
arc.num; //get
arc.num = 11; //set
arc.getArchiver() //会返回出[{val: 11}]