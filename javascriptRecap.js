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

Using object initializer => literal notation:
var myObj = {myKey: "myValue", "my other key": 4};
2 ways to access object information: dot notation & bracket notation
myobject.prop  /   myobject["other property"]

Object Constructors:
function Player (name, marker) {
    this.name=name;
    this.marker=marker;
    this.sayName=funciton () {
        console.log(name);
    }
}
const player1=new Player('tim','X');
You create a new object that has a constructor (function) with 'new'.
You create a new object (without constructor) with Object.create() method.

prototype attributes:
let obj = new Object(); && let obj2 = {}; ==> the prototype attribute is Object.prototype.
let user = new Person(); ==> prototype attribute (or prototype object) is Person.prototype.
So, the prototype attribute of any object is the parent object.

If a property is not found in the prototype chain, then undefined is returned. 
=> protoypal inheritance

__proto__ is a getter/setter for [[Prototype]] hidden property. (deprecated)
Now, use Object.getPrototypeOf / Object.setPrototypeOf

Looping through properties, inherited or not:
for(let prop in rabbit) alert(prop);
==> possible to filter with: rabbit.hasOwnProperty(prop);

IIFE (immediately-invoked function expression):
let message = function(){return "hello world"};

car instanceof Vehicle // => true

myFunc.call(arg1, arg2) || myFunc.apply(arg1,[other_args]). The second one takes an array as the 2nd argument.
sum.apply(undefined, [10, 2]); ==> first argument is the context of the invocation

const boundGetNumbers = numbers.getNumbers.bind(numbers);
const double = multiply.bind(2);

When an arrow function has only 1 statement, you can omit the 'return' keyword.

An object is a collection of properties and methods. A property is an association between a key-value pair.
If the property's value is a function, it is called a method.
Those properties are just like variables, only attached to an object. 
Objects are sometimes called associative arrays.

2 ways to define an object method:
let myobj = {
    mymethod: function(p) {...}
    myothermethod(p1) {...}

Using getters & setters:
const myObj = {
  a: 7,
  get b() {return this.a + 1;},   
  set c(x) {this.a = x / 2;}
};
Getters and setters can also be added later using the 'defineProperties' syntax:
Object.defineProperties(myObj, {
  b: { get() { return this.a + 1; } },
  c: { set(x) { this.a = x / 2; } },
});

*/