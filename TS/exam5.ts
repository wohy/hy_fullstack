interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  {
      type: 'admin',
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      type: 'user',
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      type: 'admin',
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  },
  {
      type: 'user',
      name: 'Wilson',
      age: 23,
      occupation: 'Ball'
  },
  {
      type: 'admin',
      name: 'Agent Smith',
      age: 23,
      role: 'Administrator'
  }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
      additionalInformation = person.role;
  }
  if (isUser(person)) {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

// 替换 定义一个泛型 Partial<User> 传入的参数有User类型内的属性就好
// export function filterUsers(persons: Person[], criteria: Partial<User>): User[] {
export function filterUsers(persons: Person[], criteria: User): User[] {
  return persons.filter(isUser).filter((user) => {
      const criteriaKeys = Object.keys(criteria) as (keyof User)[]; //拿到criteria的所有的key组成一个数组，断言为User类型的数组
      return criteriaKeys.every((fieldName) => { 
          return user[fieldName] === criteria[fieldName];
      });
  });
}

console.log('Users of age 23:');

filterUsers(
  persons,
  {
      age: 23
  }
).forEach(logPerson); //根据age为23来 过滤 persons