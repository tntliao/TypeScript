(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        speak() {
            console.log('动物在叫~~~');
        }
    }


    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }

        speak() {
            super.speak();
        }
    }

    const dog = new Dog('旺财', 7);
    console.log(dog);
})()