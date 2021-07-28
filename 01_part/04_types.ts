// object 表示一个js对象
let a: object
a = {}
a = function (){
}

// {} 用来指定对象中可以包含那些属性
// 语法：{属性名:属性值,属性名:属性值}
//在属性名后边加上?,表示属性是可选的
let b : {name: string, age?: number}
b = {name: '钢铁侠', age: 50}

//[propName: string]: any 表示任意类型的属性
/*
*   [propName: string]:  any
*   key name is string   value is any（任意类型）
* */
let c : {name: string, [propName: string]: any}

c = {
    name : '蜘蛛侠',
    age : '17'
}

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型,形参:类型...) => 返回值
*
* */

let d:(a:number,b:number) => number;
/*d = function (n1:string, n2:string):number{
    return 10;
}*/

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
//string[] 表示字符串数组
let e2: string[];
e = ['a', 'b', 'e'];

//number[] 表示数字数组
let f:number[];
f = [1, 2, 3, 4];

let g: Array<number>;
g = [1,2,3]

/*
*   元组，元组就是固定长度的数组
*       语法：[类型,类型,类型]
* */
let h:[string,number];
h = ['hello',18]

/*
*   emum 枚举
* */
enum Gender{
    Male,
    Female
}

let i : {name:string,gender:Gender};
i = {
    name: '孙悟空',
    gender:Gender.Male // 'male'
}
// console.log(i.gender === Gender.Male)

// & 表示同时
let j: {name: string} & {age: number};

j = {
    name: '奇异博士',
    age: 17
}

//类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;