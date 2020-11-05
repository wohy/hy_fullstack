interface IUser {
    name: string ;
    age: number;
}
const getUserInfo = (user:IUser) => `
    name: ${user.name}, age: ${user.age}
`