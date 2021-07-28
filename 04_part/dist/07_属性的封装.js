"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('班纳', 47);
    per.name = "gtx";
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // B.num = 33;
    /* class C {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    } */
    class C {
        //可以直接将属性定义在结构函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('zzx', 16);
    console.log(c);
})();
