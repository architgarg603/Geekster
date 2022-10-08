// diff let, var and const

// let
// block scope
// reassignable
// cannot be accessed before initailization


// var
// functional scope
// reassignable
// can be accessed before initailization


// const
// cannot be accessed before initailization
// block scope
// const reassignable



// console.log(a)
// // var a = 10;
// let a = 10;
// console.log(a)


// const arr = [];

// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.pop()
// arr.pop()
// console.log(arr)


// hoisting -> it is a process in which variable get declared as undefined and all function is defined at a perticular memory location.
// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// let a = 20;
// let b = 10;
// let fn = ()=>{

// }

// function x(){

// }


// IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// (function x(){
//     console.log('first')
// })()


// (fn)()
// x()


// Primitive type data structures in JS
//  Number, Null, Boolean, String, undefined, Symbol

//  Non primitive
// Array, object, fn


// let fn = ()=>{
//     console.log('first')
// }

// fn.a = 10;

// console.log(fn)


// Execution Context
// 2 phases - Creation phase and Execution
// left to right, top to bottom


// lexical environment

// closeure


// var a = 10;

// function fn() {
//     let b = 10;
//     return function() {  // fn - x;
//         // lex Env of X => variable and fn inside X and Lex Env of Parent
//         // local + Lex Env of fn + Lex Env of Global
//         console.log(b+" inside return fn")
//         console.log(a+"inside return fn")
//     }
// }


// let returnFn = fn();

// returnFn();


// script strict



// High order fn
// Callbacks

// let fn2 = ()=>{

// }
// let fn1 = (fn2)=>{


//     fn2();
// }

// fn1(fn2);

// fn1 = high order fn1
// fn2 = callback


// let callback = (elemnt)=>{
//     return elemnt>30
// }
// let arr = [10,20,30,40];
// let filteredArr = arr.filter(callback);
// // // filter and callback is a fn

// // callback is a fn which is passed as a parameter/argument
// // HOF is a fn which accept another fn as paramenter
// console.log(filteredArr)


// pure Fn

// let pureFn = (val) => {
//     return 10 * val
// }

// let impureFn = (val)=>{
//     return parseInt( Math.random() * val);
// }

// console.log(    pureFn(5))
// console.log(    pureFn(9))
// console.log(    pureFn(6))
// console.log(    pureFn(5))
// console.log(    pureFn(5))

// console.log(impureFn(500))
// console.log(impureFn(500))
// console.log(impureFn(500))
// console.log(impureFn(500))

// polyfill
// let arr = [1,2,3,4,5];
// // arr.map

// let printFn = (val)=>{
//     console.log(val);
// }

// Array.prototype.printFn = printFn;
// arr.printFn(ele=>printFn(ele))


// hardcopy adn shallowcopy

// let obj = {
//     a:10,
//     b:20,
//     name:{
//         fname :'Archit',
//         lname:'Garg',
//         Exp:{
//             1:'TA',
//             2:'SDE Lead',
//             3:'Educator'
//         }
//     }
// }

// let hardCopy = JSON.parse(JSON.stringify(obj));

// obj.a = 50,
// obj.name.Exp = []

// console.log(obj)
// console.log('..............................................')
// console.log(hardCopy)

// let b = obj;

// let newObj = {...obj}
/*newObj {
    top layer at diff memory location -> it wont reflect changes in both obj
    Nested Obj/ Key-value pair -> It copy same memory address
}

*/


// JSON.stringify()
// JSON.parse()


// What is JSON
// JSON is Array of Object

// []
// {}
// [{},{},{}]
// {
//     {},
//     {}
// }


// let obj1 = {
//     name:'Archit',
//     Age:'22'
// }

// let strObj = JSON.stringify(obj1)
// let parseObj = JSON.parse(strObj);
// console.log(JSON.parse(obj1))







// obj.a = 50
// obj.name.Exp = ['Ta', 'SDE Lead', 'Educator']
// console.log(obj,"................................",newObj)



// let arr = [1,2,3]

// // let newArr = [];
// // for(let i=0;i<arr.length;i++)newArr.push(arr[i])

// // newArr.push(4)
// // newArr.push(5)
// // newArr.push(6)

// let newArr = [...arr, 4,5,6]

// console.log(newArr)

let promiseFn = ()=>{
    return new Promise(( resolve,reject)=>{
        setTimeout(()=>{
            // reject('Err');
            // let data = async
            reject('Inside reject')
        }, 1000);
    })
}


// promises

// async function fn(){
//     try{
//         let data= await promiseFn()
//         // console.log(data)

//     }catch(err){
//         console.log(err+"  inside catch")
//     }
// }

// let data = fn();
// console.log(data)


promiseFn()
.then(data=>{
    console.log(data+".................inside then")
})
.catch(data=>{
    console.log(data+" ..... inside catch")
})
/*
Load web page - header footer

let data = load video load

load suggestion 

*/





