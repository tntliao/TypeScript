"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('www');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('mmm');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog.sayHello);
    console.log(cat.sayHello);
})();
