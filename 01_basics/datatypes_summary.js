// Data types in JavaScript Based on how data is stored and how it is accessed

// 1. Primitive
// 2. Non-Primitive / Reference Types

// 1. Primitive  (7 Types):

// String, Number , Boolean, Null, Undefined, Symbol, BigInt

const num = 342.45;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// console.log(typeof num);

const bigNum = 22354235263636736345252542352352300n;

//console.log(typeof bigNum);

// 2. Reference Type

// Array, Objects, Functions

//Arrays

const spaceCrafts = ["Pragyan", "AaryaBhatta", "Curiosity"];

// Objects (key-value pair)

let myObj = {
  firstName: "Dibya",
  lastName: "Sarmah",
};

//Functions

const myFunction = function (name) {
  console.log("Hello " + name);
};

// myFunction("Dibya");

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof spaceCrafts);
