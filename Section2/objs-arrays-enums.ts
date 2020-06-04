// const person: { name: string, age: number } = {
//     name: 'Caio',
//     age: 30,
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //tuple
// } = {
//     name: 'caio',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'caio',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role == Role.READ_ONLY) {
    console.log('author')    
}
