// 1. 泛型
type Value<T> = T
type NumberValue = Value<number>

function returnItem<T>(para: T): T {  // 不知道传入的参数是什么类型 将其定义为泛型 T 用于捕获传入的参数类型
  return para
}
returnItem('hello')

function swap<T, U>(tuple: [T, U]) : [U, T] { //定义多个泛型变量
  return [tuple[1], tuple[0]]
}
swap([7, 'seven'])

function getArrayLength<T>(arg: Array<T>) { //这样就不用定义多个泛型变量便可访问到数组里元素的各种类型
  console.log(arg.length);
  return arg
}
getArrayLength([1, 2, 3])

// 反向推导 泛型代表的数据类型
function create<T>(val: T) : T {
  return val
}
let num: number
const c = create(num) //此时传入的num为number类型 这 T 代表的就为number类型


// 2. 索引签名
type Test = {
  foo: number;
  bar: string
}
type N = Test['foo'] //number


// 3. 条件类型
type IsNumber<T> = T extends number ? 'yes' : 'no'
type A = IsNumber<2>    //yes
type b = IsNumber<'3'>  //no

type TypeName<T> = T extends string ? 'string' 
  : T extends boolean ? 'boolean' : 'object'
type T0 = TypeName<string> // 'string'
type T1 = TypeName<'a'>   // 'string'
type T2 = TypeName<true> // 'boolean'



// 5. keyof 获取对象的key值集合
type Obj = {
  foo: number;
  bar: string
}
// type Keys = keyof Obj  // 'foo' | 'bar'
type Copy = {
  [K in keyof Obj]: Obj[K]
}


// 6. infer 条件类型中的类型推断
type Get<T> = T extends infer R ? R : never
type T = Get<number>
type Unpack<T> = T extends Array<infer R> ? R : T
type U = Unpack<2>
