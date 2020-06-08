// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is dones')
//     }, 2000);
// })

// promise.then(data =>{
//     data.split(' ');
// })

// function merge<T extends object, U extends object>(ojbA: T, objB: U) {
//     return Object.assign(ojbA, objB);
// }

// const mergedObj = merge({ name: 'caio', hobbies: ['soccer'] }, { age: 31 });
// console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('caio'))
console.log(countAndDescribe(['caio', 'teste']))
// console.log(countAndDescribe(10))

function extractAndConvert<T extends object, U extends keyof T>(param1: T, param2: U) {
    return 'Value: ' + param1[param2];
}

extractAndConvert({ name: 'caio' }, 'name')

class DataStorage<T> {
    private data: Array<T> = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('10')
textStorage.addItem('11')
// textStorage.removeItem('10')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(11);
console.log(numberStorage.getItems());
