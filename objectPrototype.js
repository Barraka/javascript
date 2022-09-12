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

//Get a list of all the non-inherited properties of an object:
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