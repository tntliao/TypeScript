// object 表示一个js对象
var a;
a = {};
a = function () {
};
// {} 用来指定对象中可以包含那些属性
// 语法：{属性名:属性值,属性名:属性值}
//在属性名后边加上?,表示属性是可选的
var b;
b = { name: '钢铁侠', age: 50 };
//[propName: string]: any 表示任意类型的属性
/*
*   [propName: string]:  any
*   key name is string   value is any（任意类型）
* */
var c;
c = {
    name: '蜘蛛侠',
    age: '17'
};
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型,形参:类型...) => 返回值
*
* */
var d;
/*d = function (n1:string, n2:string):number{
    return 10;
}*/
/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
//string[] 表示字符串数组
var e2;
e = ['a', 'b', 'e'];
//number[] 表示数字数组
var f;
f = [1, 2, 3, 4];
var g;
g = [1, 2, 3];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型,类型,类型]
* */
var h;
h = ['hello', 18];
/*
*   emum 枚举
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
};
// console.log(i.gender === Gender.Male)
// & 表示同时
var j;
j = {
    name: '奇异博士',
    age: 17
};
var k;
var l;
var m;
k = 2;
