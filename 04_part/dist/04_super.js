"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log('动物在叫~~~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        speak() {
            super.speak();
        }
    }
    const dog = new Dog('旺财', 7);
    console.log(dog);
})();
