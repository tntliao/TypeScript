import { age } from './m1'

function fn1(a: number, b: number): number {
    return a + b;
}

console.log(fn1(1, 2));
console.log(age);

const obj = {
    name: 'jiajia',
    age: 17,
    sayName: function () {
        console.log(this.name + 'this');
    }
}


console.log(obj.name);
console.log(obj.age);
obj.sayName()

console.log(Promise);

