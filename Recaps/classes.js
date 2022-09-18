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

