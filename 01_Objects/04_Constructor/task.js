//task 1
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

a = new A();
b = new B();
console.log(a === b);
//task 3

function Accumulator(Svalue) {
  this.value = Svalue;
  this.takinginput = function () {
    this.value += +prompt("a ? ", 0);
  };
}
