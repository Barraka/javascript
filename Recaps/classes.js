//We don't need semicolons between method names, unlike objects:
class User {
    constructor(name) {
      this.name = name;
    }  
    sayHi() {
      alert(this.name);
    }  
  }  
  let user = new User("John");
  user.sayHi();

  //Named class expression:
  let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  new User().sayHi(); // works, shows MyClass definition
  alert(MyClass); // error, MyClass name isn't visible outside of the class

//We can even make classes dynamically “on-demand”, like this:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }};}

//Classes may include getters and setters:
class User {
    constructor(name) {
      this.name = name;
    }  
    get name() {
      return this._name;
    }  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }}

//Computed method names:
class User {
    ['say' + 'Hi']() {
      alert("Hello");
    }}  
new User().sayHi();

//Class field: they are just properties, but set on individual objects, not on the prototype (unlike methods).
class User {
    name = "John";  
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }}

//----MDN

//Class declarations: Must be declared in clode before instanciating it.
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }}

//Class expressions:
//unnamed:
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }};
  console.log(Rectangle.name);// output: "Rectangle"
  
//named
Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }};
  console.log(Rectangle.name);// output: "Rectangle2"

  //Static method:
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;  
      return Math.hypot(dx, dy);
    }}

//Private field declarations
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }}

//Using super():
class Base {
    constructor() {
      console.log('Base constructor:', this.field);
    }}  
class Derived extends Base {
    field = 1;
    constructor() {
        super();
        console.log('Derived constructor:', this.field);
    }}
const instance = new Derived();// Base constructor: undefined // Derived constructor: 1

//Another super () example with arguments:
class Animal {
    constructor(name) {
      this.name = name;
    }  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }}  
class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }  
    speak() {
      console.log(`${this.name} barks.`);
}}  
const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.