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

let obj = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let user = { name: "peter" };
