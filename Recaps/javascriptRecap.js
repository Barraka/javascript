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

Factory functions:
They are simply functions that return objects for us to use in out code:
let myfac = (name,age) => {
    let sayHello = () => console.log('hello');
    return {name, age, sayhello);};

Base scope in js is 'window'. A global variable in a js file can be accessed by window.myvariable
Scope can be either global or local
namespace usually refers to the highest level scope
Lexical scope (closure) - outer variables can be accessed within nested functions, i.e. climbing up the scope chain
Scope chain - when resolving a variable, javascript starts at the innermost scope and searches outwards.
Closure - created when accessing avraibles outside of the immediate lexical scope
We can change scope with .call(), .apply() and .bind()
==> function.call(scopeWanted) or function.apply(scopeWanted)
The only difference is with optional arguments: .call(scope, arg1, arg2)  => .apply(scope, [arg1, arg2])
function.bind(scope) does not invoke the function


public a private scope: Doesn't exist, but can be emulated through closures.
A simple way is by wrapping a function inside another function

The 'var' keyword is only function-scoped (or global-scoped), so a var in an 'if' statement, is actually scoped outside, which can be the global scope in a js file.
The lat & const keywords are block-scoped, inside any {} and will not be visible outside that block.

Closures: (= nested functions / block scopes / modules. Functions retain their scope even if they are passed around and called outside of that scope.)
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
A closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.


Lexical scoping => a nested function can have access to its parent function variables.
The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available

Functions in javascript form closures. A closure is the combination of a function and the lexical environmment within which that function was declared.
Closures can also be used to emulate private variables & provide a way of managing the global namespace.
Closures have 3 scopes: its own; enclosing scope(s); global scope.

Privileged methods are methods defined within a function's scope, that have access to the private data

IIFE - Immediately invoked function expression:
let myfuncresult = (function() {
    let foo='bar';
    return{foo};
})()

A useful side-effect of encapsulating the inner workings of our program into objects is 'namespacing'. Namespacing is a technique that is used to avoid naming collisions in our programs.

2 kinds of object properties:
- Data properties
- Accessor porperties (getters & setters)

A class is an extensible program-code template for creating objects, providing initial values for state (variables) and implementation of behavior (methods).

Classes are great when you need to create many objects of the same kind. Basic syntax:
class MyClass {
    constructor() {...}
    method1(){...}
    method2(){...}
}
Then, num MyClass() to create each object. Contructor is automatically called by new()
A few differences with a constructor function: has an internal property 'IsClassConstructor'. Must be called with 'new' keyword.
All code inside the class construct is automatically in strict mode.

Static keyword defines a property or method that will not be attached to object instances.
Instance properties must be defined inside of class methods (e.g. in constructor method)


*/