class Person {
    name: string = 'liaojiajia';
    age: number = 18;
    sayName() {
        console.log(this.name + 'this');
    }
}

const per1 = new Person();

console.log(per1.name);
console.log(per1.age);
per1.sayName()