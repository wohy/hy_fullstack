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
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
      ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}
// 替换为
// export function filterPersons(persons: Person[], personType: string, criteria: Partial<Person>): Person[] {
export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
  return persons
      .filter((person) => person.type === personType)
      .filter((person) => {
          let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
          return criteriaKeys.every((fieldName) => {
              return person[fieldName] === criteria[fieldName];
          });
      });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 }); 
//过滤得到 age为23 且 类型为user的数据 可返回的数据类型是unknow类型的
// 所以导致 usersOfAge23 无法匹配到 logPerson函数
// 函数的重载
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);