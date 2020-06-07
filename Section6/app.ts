type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Caio',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable | Numberic;

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number, b: string): string
function add(a: string, b: number): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
}

const result = add('caio', ' Ragazzi');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Caio',
    job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData.job.title);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name)
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if ('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate)
//     }
// }

// printEmployeeInformation(el);

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo: ' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird'
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse'
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//         case 'horse':
//             speed = animal.runningSpeed
//         default:
//             break;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({ type: 'horse', runningSpeed: 50 })

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//     // (<HTMLInputElement>userInputElement).value = 'Hi There!';
//     (userInputElement as HTMLInputElement).value = 'Hi There!';
// }

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid Email',
//     username: 'Not a valid UserName'
// };

