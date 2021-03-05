// export type User = unknown;

// 或者把type User = unknown替换掉
// 直接定义一个User类型,之后的user属性也将其设置为User类型
// 传入的参数 users 也将其设置为User类型
// export type User = {
//   name: string,
//   age: number,
//   occupation: string
// }

interface T {
  name: string,
  age: number,
  occupation: string
}

// 给其加上了类型限定
// 则 向user数组中push内容 必须满足 T 类型的数据，少一个，一个不一样都不行
export const users: T[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: T) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
