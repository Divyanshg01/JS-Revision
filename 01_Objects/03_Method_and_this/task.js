//task 1

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);

//TASK-2

// let calculator = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   multi() {
//     return this.a * this.b;
//   },
// };

//here we create two variables inside the object by use of this keyword

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up();
// ladder.showStep();
ladder.showStep();

// to make chaining possible in object methods these methods should return this individually which means they will return the object itself after each call and then we will be calling the next chained method just as we call on a normal object and this cycle continues
