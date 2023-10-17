// console.log(Math.PI);

// Math.PI = 5;

// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Object.defineProperty(Math, "PI", {
//   value: 3.141592653589793,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

const Ghol = {
  name: "Ghol",
  ingredient_1: "Banana",
  ingredient_2: "Ghee",
};

///---------------

// console.log(Ghol);

// for (let [key, value] of Object.entries(Ghol)) {
//   console.log(`${key} : ${value}`);
// }

///---------------

// Ghol.name = "Banana_Shake";

// for (let [key, value] of Object.entries(Ghol)) {
//   console.log(`${key} : ${value}`);
// }

///---------------

Object.defineProperty(Ghol, "name", {
  writable: false,
});

Ghol.name = "Banana_Shake";

for (let [key, value] of Object.entries(Ghol)) {
  console.log(`${key} : ${value}`);
}
