// // let obj = {
// //   name: "david",
// // };
// // // obj.__proto__ = 5;
// // // console.log(obj.__proto__);
// // console.log("name" in obj)

// let user = {
//   name: "david",
//   age: 19,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// Task1

// const user = {};
// user.name = "jOHN";

// user.surname = "Smith";

// user.name = "pETE";

// delete user.name;
// console.log(user);

// task2

// let obj = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let user = { name: "peter" };

// console.log(isEmpty(user))

//Task 3

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

//task 4

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function Multiply2(obj) {
  for (let key in obj) {
    if (typeof obj[key] == Number) {
      obj[key] = obj[key] * 2;
    }
  }
}
Multiply2(menu);
console.log(menu);
