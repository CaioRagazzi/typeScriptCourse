class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet() {
        if (this.name) {
            console.log(this.name + ' phrase');
        }
        else {
            console.log('theres no name');
        }
    }
}
let user1 = new Person();
user1.greet();
