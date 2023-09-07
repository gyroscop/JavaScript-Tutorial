///this in Objects

const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// console.log(user.welcomeMessage());
user.username = "Dibya";
// console.log(user.welcomeMessage());

// console.log(this);

// this in normal function

function demo() {
  name: "Dibya";
  console.log(this.username);
}

// demo();

///this in arrow function

const arrow = () => {
  name: "Dibya";
  console.log(this.username);
};

// arrow();

/*
so in terms of "this" no difference in normal function and arrow function  
*/

// Arrow in details

//explicit arrow functions

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(3, 5));

//implicit arrow functions

const addThree = (num1, num2, num3) => num1 + num2 + num3;

// console.log(addThree(3, 5, 2));

// arrow functions with object

const obj = () => ({ username: "Dibya" });

// console.log(obj());

/// Hoisting (how values are stored in functions)

// type 1

// console.log(conCatTwo("Dibya", "Sarmah")); // position 1

function conCatTwo(str1, str2) {
  return `${str1} ${str2}`;
}

// console.log(conCatTwo("Dibya", "Sarmah")); // position 2

// type 2
console.log(conCatThree("Dibya", "Jyoti", "Sarmah")); // position 1  (Cannot access 'conCatThree' before initialization)

const conCatThree = function (str1, str2, str3) {
  return `${str1} ${str2} ${str3}`;
};

// console.log(conCatThree("Dibya", "Jyoti", "Sarmah")); // position 2
