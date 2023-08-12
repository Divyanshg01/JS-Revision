// let obj = {
//   message: "hello",
// };

// let user = obj;

// let data = 10;
// let data_c = data;

// console.log(user === obj);
// console.log(data === data_c);

// console.log(obj);

// obj.message = "hi there";
// console.log(user);
// console.log(obj);

// data = 12;
// console.log(data);
// console.log(data_c);

// let a = {};
// let b = {};

// console.log(a === b);

// // to copy a obj
// let orig = {
//   a: 1,
//   b: 2,
// };
// let clone = {};
// for (let key in orig) {
//   clone[key] = orig[key];
// }

// console.log(clone);

// // We can also use objct .asssing for merging

// const user = {
//   name: "john",
// };

// const per1 = {
//   address: "this is var1 ",
// };

// const per2 = {
//   address2: "this is address 2 ",
// };

// // Object.assign(user, ...per1, ...per2);
// //             dest , sources
// Object.assign(user, per1, per2);
// console.log(user);

// //if a value already exists it gets overwritten

// //similarly we can create a clone

// const clone = Object.assign({}, user);
// console.log(clone);

//To perform deep cloning

// let user = {
//   name: "john",
//   age: 1,
//   fullname: {
//     fn: "vin",
//     ln: "diesel",
//   },
// };

// const clone = structuredClone(user);
// let clone = {};
// Object.assign(clone, user);

//this is 2 level deep

// console.log(clone.fullname === user.fullname);
//Structured clones also fails when there is an function in the object in such cases you can use lodash library

