interface Named {
    readonly name?: string;
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        this.name = n;
    }

    greet(): void {
        if (this.name) {
            console.log(this.name + ' phrase');
        } else {
            console.log('theres no name');
        }
    }
}

let user1 = new Person();
user1.greet()