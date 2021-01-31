// const count = ref(ref(ref(2)))
// count.value.value.value = 3
// // ref 修饰 T 后会给其套一个包装
// { value: T}


type Ref<T = any> = {
  value: T
}
type UnwrapRef<T> = {
  ref:  T extends Ref<infer R> ? UnwrapRef<R> : T
  object: { [K in keyof T ]: UnwrapRef<T[K]> }
  other: T
}[T extends Ref ? 'ref' : T extends object ? 'object' : 'other']


function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>> 

const count = ref(ref(2)) 
// ref(2) 为 Ref<number>，Ref<number> 继承自Ref
// 则ref(ref<2>) 为 ref(Ref<number>)
// ref(number)s
// ref(Ref<UnwrapRef<number>>)
// ref(UnwrapRef<number>)


count.value //number