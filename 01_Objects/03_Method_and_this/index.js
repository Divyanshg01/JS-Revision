let user = {
  name: "john",
  age: 39,
};

user.sayHi = function () {
  console.log("hello");
};

// yser.sayHi()
// user.sayHi()

//short hand for writing methods

let user1 = {
  sayHELLO() {
    console.log("Hello");
  },
  name: "john",
};

// value of this is determined at the time of function execurtion
function hi() {
  console.log(this.name);
}

// user1.hi()

user1.f = hi;
user1.f();

//Arrow function have no this
//without a function execution the value of this is undefined
