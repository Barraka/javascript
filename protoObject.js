let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
let rabbit = {
jumps: true,
__proto__: animal
};

let longEar = {
earLength: 10,
__proto__: rabbit
};
// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

let user = {
name: "John",
surname: "Smith",

set fullName(value) {
    [this.name, this.surname] = value.split(" ");
},

get fullName() {
    return `${this.name} ${this.surname}`;
}
};

let admin = {
__proto__: user,
isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

for(let prop in rabbit) alert(prop);

class Pet {
    constructor(type, legs) {
      this.type = type;
      this.legs = legs;
      this.otherinfo = ()=>console.log(`The ${this.type} has ${this.legs} legs`);
    }

  }
const myCat = new Pet('Cat', 4);
setTimeout(myCat.logInfo, 1000);

