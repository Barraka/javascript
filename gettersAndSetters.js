let user = {
name: "John",
surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
get() {
    return `${this.name} ${this.surname}`;
},
set(value) {
    [this.name, this.surname] = value.split(" ");
}
});

alert(user.fullName); // John Smith
for(let key in user) alert(key); // name, surname
// ----------------------

let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  alert(user.name); // Pete