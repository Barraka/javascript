class baseclass {
    constructor(name, age){
        this.name;
        this.age;
        this.town;
    }
    set setTown(t){
        this.town=town;
        console.log('town');
    }
    otherset(t) {
        this.town=town;
    }
    get getTown(){
        return this;
    }}

let dog=new baseclass('my dog', 23);