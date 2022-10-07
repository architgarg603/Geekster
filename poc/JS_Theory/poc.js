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
(function x(){
    console.log('first')
})()


// (fn)()
// x()


// Primitive type data structures in JS
// Execution Context
// closeure
// High order fn
// Callbacks
// pure Fn
// polyfill
// promises
// hardcopy adn shallowcopy