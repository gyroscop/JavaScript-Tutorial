//********************Operations******************//

// console.log("1" + 2 + 2); //122
// console.log("1" + (2 + 2)); //14

// console.log(1 + 2 + "2"); //32
// console.log(1 + (2 + "2")); //122

// console.log(+true); //not good practice
// console.log(+""); //not good practice

// console.log("2" == 2);  // No typeof validation => true
// console.log("2" === 2);  //  typeof validation => false

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
The reason is that an equity check == and comparisons > < >= <= 
work differently.  Comparisions convert null into a number , treating
it as 0. That's why (3) null>=0 is true and (1) null > 0 is false 
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0);
