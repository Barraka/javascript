/*When creating an object blueprint, you can set methods inside it, especially if it references a variable inside it. Also if not a lot of instances of that object will be created.
For all the rest of the methods, it's better to create it outside using Object.prototype syntax.
*/
let Dog=function(name){
    this.name=name;
    let barkCount=0;
    this.bark=function(){
        barkCount++;
        console.log(`${this.name} just barked`);
    };
    this.getBarkCount=function(){
        console.log(`${this.name} has barked ${barkCount} times`);
    };

}

Dog.prototype.wagtail=function(){
    console.log(`${this.name} is wagging its tail`);
};

let dog=new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagtail();

function showProp(obj) {
    let result='';
    for(let x in obj) {
        //if(Object.hasOwn(obj,x)) {
        if(obj.hasOwnProperty(x)) {
            result+=`obj.${x} = ${obj[x]}\n`;
        }
    }
    console.log(result);
}


//Little trick to bind the 'this' keyword to a perticular object in order to avoid some conflicts:
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  var that = this;
  console.log(that); // <nav> element
  setTimeout(function () {
    console.log(that); // <nav> element
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);

//Not what we want with 'this':
var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
  console.log(this); // [object Window]
}

//a solution is to use .call():
let links = document.querySelectorAll('div');
for(let i=0; i<links.length;i++) {
    (function () {console.log(this);}).call(links[i]);
}

let links = document.querySelectorAll('div');
for(let i=0; i<links.length;i++) {
    (()=>console.log(this)).call(links[i]);
}

//The .bind() methods does not invoke the function. Can be handy when passing args in event listeners:
div.addEventListener('click',mufunc(arg1, arg2)); // ==> doesn't work, as the function will be called immediately
//A possible solution, but not viable if we need to use the 'this' keyword:
div.addEventListener('click',function(){mufunc(arg1,arg2);}); //also costly because we create more functions
//instead, we can use .bind:
div.addEventListener('click',myfunc.bind(scope,arg1,arg2));

//Public a private scope:
//public methods:
var Module = (function () {
    return {
      myMethod: function () {
        console.log('myMethod has been called.');
      },
      someotherfunc: function() {
        console.log('other function');}
    };    
  })();
  // call module + methods
Module.myMethod();

//the 'return' statement here is what returns the public methods, accessible in the global scope, but are namespaced.
//private methods:
var Module = (function () {
    var privateMethod = function () {
        console.log('a private method');
    };
    return {
      publicMethod: function () {
        console.log('a public method');
        privateMethod();
      }
    };
  })();

  //Here’s an example of returning an Object, making use of public and private methods:
  var Module = (function () {
    var myModule = {};
    var _privateMethod = function () {
        console.log('this is private');
    };
    myModule.publicMethod = function () {
        console.log('this is public');
    };
    myModule.anotherPublicMethod = function () {
        console.log('this is public');
    };
    return myModule; // returns the Object with public methods
  })();
  
  // usage
  Module.publicMethod();

  //another way to distinguish between public & private:
  var Module = (function () {
    var _privateMethod = function () {
        console.log('this is private');
    };
    var publicMethod = function () {
        console.log('this is public');
    };
    var anotherPublicMethod = function () {
        console.log('this is public');
    };
    return {
      publicMethod: publicMethod,
      anotherPublicMethod: anotherPublicMethod //or, return{publicMethod, anotherPublicMethod}
    }
  })();

  //Example of a closure:
  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  //add5 & add10 are both closures. They share the same function body definition, but store different lexical environments;

  //Using the Module desing pattern, we can use closures to define public functions that can access private functions & variables.
  const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();  
  console.log(counter.value()); // 0.
  // Here, we have 3 functions that share a single lexical environment, sharing a function & variable through an IIFE ==> immediately invoked function expression.
  let c1=counter;let c2=counter;
  c1.increment();
  //c1.value ==>1 ; c2.value==> 1 also. They are dependant & linked, they share the same privateCounter variable.

  //Different version:
  const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
let c3=makeCounter(); let c4=makeCounter();
//c3.increment() ; c3.value()=>1 ; c4.value()=> 0
//They are independant. Each closure references a different version of privateCounter through its own closure.

//Example of closure in a module:
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
}
//then:
import { getX, setX } from "./myModule.js";
console.log(getX()); // 5

//Back with module patterns. The 'Revealing Module Pattern':
let mymodule = (function() {
    let _privatevar="hello world";
    let publicvar="I'm public";
    function _privatemethod() {
        console.log(_privatevar);
    }
    function publicmethod() {
        _privatemethod();
    }
    return {
        publicmethod,
        publicvar
    };
})();


const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      ++timesRun;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
    let gettime =()=> {return timesRun};
    // ----------------------
    return {
      makeUppercase,gettime
    }
  })();


  // The traditional module pattern, with public & private variables:
  let gameboard = (function () {
    let publicvar=5;
    let privatevar1=0;
    let privatevar2=0;
    let privatemethod= function(foo){
        return 'bar';
    }

    // ----- private vars above this line -----
    return {
        publicvar,
        publicmethod:function(bar){
            //stuff using private variables
        }
    };
})();