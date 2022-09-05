/*
let and const declarations are scoped to the block statement that they are declared in.
var variables are not block-scoped, but only local to the function that the block resides within.

variable hoisting: possible to refer first, and declare later. But will return undefined until assigned.
let and const are hoisted, but not initialized, so ReferenceError.

functions are hoisted when using function declarations (function abc() {...}), but not when using function expressions (let myfunc=function() {...})
Global variables using 'var' can be accessed from the browser with window.myvar

7 primitive data-types (immutable): BigInt, Boolean, null, undefined, Number, String, Symbol
and Object data-type. (= named containers for values, in key-value pair format. == > dictionary)

js is dynamically typed, so we can change the value of a variable (let x= 3; x='three';)

let mynum ='1.1' ==> +mynum converts it to the number 1.1. So mynum+2 ==> "1.12", and +mynum + 2 ==>3.1

Type coercion is performed for comparisons with double equals: "5" == 5; // = true

array.shift() ==> removes first element. array.unshift("abc") ==> creates a new element at index 0.
array.pop() ==> removes last. array.push("xyz") ==> adds to last position.
array.join(" ") ==> returns a string of all elements.

var myObj = {myKey: "myValue", "my other key": 4};



*/