class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    speak() {
        console.log(this + 'this');
    }
}


const d1 = new Dog('小黑', 3);
const d2 = new Dog('小白', 2);

console.log(d1);
console.log(d2);

d1.speak();
d2.speak();
