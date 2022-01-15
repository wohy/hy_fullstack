interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  // 原题
  if (person.role) {
      additionalInformation = person.role;
  } else {
      additionalInformation = person.occupation;
  }

  // if ((<Admin>person).role) { 
  //   //role 只属于Admin 不属于Person 而tyscript无法断言此时的person是什么类型User还是Admin
  //   // 所以需要使用类型断言
  //     additionalInformation = (<Admin>person).role;
  // } else {
  //     additionalInformation = (<User>person).occupation;
  // }

  // 还可已使用类型收缩 使用 instanceof
  // if ('role' in person) { //类型收缩 也可用instanceof、is
    // person 类型会自动推导为Admin
  //     additionalInformation = person.role;
  // } else {
    // person 类型会自动推导为User
  //     additionalInformation = person.occupation;
  // }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);