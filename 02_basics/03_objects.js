/*

There are two ways to declare objects

1. Object Literals

2. Object.create (constructor way , singleton)
 or 
 const obj = new Object();

*/

// 1. Object Literal

const mySym = Symbol(); //2

const JsUser = {
  name: "Dibya",
  "full name": "Dibya Jackson",
  //   mySym: Symbol("mykey1"),//1
  [mySym]: Symbol("mykey1"), //2
  age: 18,
  location: "Manali",
  email: "Dibya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.name);

// console.log(JsUser["full name"]);

// console.log(JsUser.isLoggedIn);

// console.log(JsUser[mySym]);

/*
///Object Freeze , no more changes allowed

console.log(JsUser["full name"]);

console.log("isFrozen 1", Object.isFrozen(JsUser));

Object.freeze(JsUser);

console.log("isFrozen 2", Object.isFrozen(JsUser));

JsUser["full name"] = "Dibya Basu";

console.log(JsUser["full name"]);
*/

/*
// New Element Entry


JsUser.ph = "1234567897";
console.log(JsUser);

*/

/// Object Funnctions
JsUser.greeting = function () {
  console.log(
    `Hello ${this["full name"]} ,  welcome to our investigative analysis`
  );
};

// console.log(typeof JsUser.greeting());

console.log(JsUser.greeting());
