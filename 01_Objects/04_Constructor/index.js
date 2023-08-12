//constructor function are named with Capital letters

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let john = new User("john");

console.log(john);

// when a function is executed with new then a new empty object is created  and assigned to this

console.log(john.isAdmin);
/*


function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

*/

//We can also have an immediately invoked contructor function

let user = new (function () {
  this.name = "JOHN";
  this.isAdmin = false;
})();

//to check if its called with new ->   if(! new.target)



//Return from a contructor
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
