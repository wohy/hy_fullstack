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
      // vue 的发布订阅模式
      archive.push({val: newValue})
    },
  })
  this.getArchiver = function() {
    return archive
  }
}

// obj.num = 2  //若是defineProperty为它创建出来的属性，必须经过set来修改obj, 可若原本obj中就有一个num属性，并且defineProperty没有get、set这个属性，则可不通过set来修改。
// console.log(obj.num);

let arc = new Archiver()
// arc.num; //get
arc.num = 11; //set
console.log(arc.getArchiver()); //会返回出[{val: 11}]
console.log(arc.num); //此处执行了get属性