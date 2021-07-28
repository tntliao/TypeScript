//声明一个变量a，同时指定它的类型为number
var a;
a = 1;
a = 2;
// a = 'string';  //此行代码会报错，因为变量a的类似是number，不能赋值字符串
var b;
b = 'hello';
// b = 123 //报错
//声明完变量直接赋值
// let c:boolean = false;
//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检查
var c = false;
c = true;
//JS中的函数是不考虑参数的类型个个数
// function sum(a,b){
//     return a + b;
// }
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
