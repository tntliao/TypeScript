(function () {
    class Person {

        /*
            TS可以在属性前添加属性的修饰符
                public 修饰的属性可以在任意位置访问(修改) 默认值
                private 私有属性，私有属性只能在类内部进行访问(修改)
                    - 通过在类中添加方法使得私有属性可以被外部访问
                protected 受包含的属性，只能在当前类和当前类的子类中访问(修改)
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
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
    per.name = "gtx"
    console.log(per);

    class A {
        protected num: number;

        constructor(num: number) {
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
        constructor(public name: string, public age: number) {

        }
    }

    const c = new C('zzx', 16);
    
    console.log(c);

})()