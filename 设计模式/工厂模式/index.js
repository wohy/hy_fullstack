// const ceo = {
//   name: 'ceo',
//   age: 20,
//   carrer: 'coder'
// }
// const ceo = {
//   name: 'jiushen',
//   age: 21,
//   carrer: 'coder'
// }


// 录入员工信息
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career
  this.work = work
}

// const user = new User(name, age, career)

function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder'
  this.work = ['写代码', '写系分', '修Bug']
}

function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product-manager'
  this.work = ['订会议室', '写PRD', '催更']
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'code':
      work = ['写代码', '写系分', '修Bug']
      break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更']
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户']  //此处将boss的信息录入了，导致Bug
    // ......
  }
  return new User(name, age, career, work)
}