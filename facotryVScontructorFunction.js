//Version with factory function:
let personFactory=(name,age)=> {
    let sayHi=()=>console.log('hello');
    return {name,age,sayHi}; //used to be: return {name: name, age: age, sayHello: sayHello};
};

let jeff=personFactory('jeff',27);
jeff.sayHi();


//Version with constructor pattern:
let Person = function(name,age) {
    this.sayHello = () => console.log('hello');
    this.name = name;
    this.age = age;
};

let mike= new Person('jeff', 27);


//With factory functions, we can accomplish the same thing as prototypes & inheritance:
let Person2 =(name) => {
    let sayname = () => console.log(`my name is ${name}`);
    return {sayname};
}

let Nerd = (name)=> {
    let {sayname}=Person2(name);
    let dothing=()=>console.log('doing thing');
    return {sayname,dothing};
}
let john=Nerd('john');
//john now has 2 methods, john.sayName() and john.dothing()


//3 types of protoypal inheritance:
//Delegation / differential inheritance => A delegate prototype is an object that serves as a base for another object (classical inheritance tree / scope)
//The ES6 version:
class Greeter {
    constructor (name) {
        this.name=name || 'John Doe';
    }
    hello() {
        return `Hi, I'm ${this.name}`;
    }
}

let george=new Greeter('George');
george.hello() // ==> Hi I'm George

//ES5 constructor function verison:
function Greeter2(name) {
    this.name=name||'John Doe';
}
Greeter.prototype.hello=function hello() {
    return `Hi I'm ${this.name}`;
}
let george2 = new Greeter('George');
george2.hello() // ==> Hi I'm George

//Version using a factory function
let proto={
    hello() {
        return `Hi, I'm also ${this.name}`;
    }
};
let greeter3=(name)=>Object.assign(Object.create(proto),{
    name});
let george3=greeter('George');
geroge.hello() // ==> Hi I'm also George


//Concatenative Inheritance / Cloning / Mixins
let proto2={
    hello:function hello() {
        return `Howdy, I'm ${this.name}`;
    }
};
let andy=Object.assign({},proto2,{name:'Andy'});

//same approach for mixings:
import Events from 'eventemitter3';
const object = {};
Object.assign(object, Events.prototype);
object.on('event', payload => console.log(payload));
object.emit('event', 'some data'); // 'some data'


//Functional Inheritance
//Functions created for the purpose of extending existing objects are known as 'functional mixins'



//The Module Pattern
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
//So, similar to a factory function. But instead of creating a factory that we can re-use to create multiple objects, the modcule pattern wraps the function in an IIFE (immediately invoked function expression)

//Taken from article linked in TOP:
// class
class ClassCar {
    drive () {
      console.log('Vroom!');
    }}  
  const car1 = new ClassCar();
  console.log(car1.drive());  
  
// constructor
function ConstructorCar () {}
ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');};  
const car2 = new ConstructorCar();
console.log(car2.drive());
  
// factory
const proto3 = {
    drive () {
        console.log('Vroom!');}
};
const factoryCar = () => Object.create(proto3);
const car3 = factoryCar();
console.log(car3.drive());

//Difference between factory & constructor: Constructors use the 'new' keyword, factories don't.