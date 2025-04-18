
// 1. create an object
let user : {name: string, age: number, nickName: string} = {
    name: 'Lina',
    age: 30,
    nickName: undefined

};

user.nickName = 'Tremble'; // add dynamically a new value, but type should be added also!!

// new admin object with the same parameters!
let admin: { name: string, age: number, nickName: string} = {
    name: "Max",
    age: 45,
    nickName: "Mad",
};

// 2. using Type for objects structure
type Person = { name: string, age: number, nickName: string};

//apply Person Type for objects with the same structure
let user1: Person = {
    name: 'Lina',
    age: 30,
    nickName: 'Tremble',
};

let admin1: Person = {
    name: "Max",
    age:45,
    nickName: "Mad",
};

//3. 2 objects with almost the same structure
// add ? for optional properties
type Person2 = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
}

let user2: Person = {
    name: 'Lina',
    age: 30,
    nickName: 'Tremble',                  // <--- property
};

let admin2: Person2 = {
    name: "Max",
    age:45,
    getPass(): string {                   // <--- new method
        return `${this.name}${this.age}`;
    },
};



