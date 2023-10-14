// const name = "Dibya";

function nameFunction(name) {
  return `Length of your name is ${name.length}`;
}

// console.log(name.length);
// console.log(nameFunction("Pabitra"));

// Object Level Function Declaration

Object.prototype.universalTruth = function () {
  return "Sun Rises In the East";
};

// console.log(name.universalTruth());
// console.log(nameFunction.universalTruth());

///////////////////////////********************************///////////////////////****************///////////////////// */ */

///////// Prototype Inheritence

const Car = {
  wheels: 4,
  seats: 4,
};

Car.__proto__.milage = function () {
  return "Range of 15-28 kmpl";
};

const Sedan = {
  // __proto__: Car, ///  Prototype Inheritence -- Syntax 1 --- old inheritence
  // seats: 5, ---Overrides
};

Sedan.__proto__ = Car; ///  Prototype Inheritence -- Syntax 2 --- old inheritence

// Object.setPrototypeOf(Sedan, Car); //  Prototype Inheritence -- Syntax 3  --- old inheritence

// console.log(Sedan.wheels);
// console.log(Sedan.milage());
// console.log(Sedan.seats);

///// Making a method to output relative length of String

// String.prototype.trueLength = function () {
//   return `${this.trim().length}`;
// };

String.prototype.trueLength = String.trim().length;

console.log("Dibya ".trueLength);
