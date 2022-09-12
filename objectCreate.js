//syntax:
let myobj = Object.create(Object.prototype);
//object literal, same result:
let myliteral = {};

let Car = function(color){
    this.color=color;
};
//when using lots of 'Car' instances, it's better to declare methods outside of the base object using Car.prorotype=...
//because in that way all instances will point to a unique method instead of each having a copy, so better in terms of memory.

//create object, running the constructor:
let car1 = new Car('red');
//create object without setting the color:
let car2 = Object.create(Car.prototype);

Car.prototype =  {
    getColor(){
        return this.color;
    }
};

let Toycar = function(){};
Toycar.prototype=Object.create(Car.prototype);

let legocar=new(Toycar);
legocar instanceof Toycar; //==>true
legocar instanceof Car; //==> true

//Other way to extend a base object:
Car.prototype.lock = function(){
    console.log("the doors are locked");
};

