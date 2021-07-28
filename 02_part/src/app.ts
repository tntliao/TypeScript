console.log('我是app.ts')
console.log('test')
//我是app.ts里面的注释

function fn1 (a:number,b:number){
    return a + b;
}

function fn2(this:Window){
    alert(this)
}

let box1 = document.getElementById('bxo1');

/*if(box1 != null){
    box1.addEventListener('click',function (){
        console.log('hello')
    })
}*/
box1?.addEventListener('click',function (){
    console.log('hello')
})