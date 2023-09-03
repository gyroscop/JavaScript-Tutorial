// push , pop, shift, unshift, includes, index of , slice,  splice, join

/// declaration

// let myArr = [1, 2, 3, 4, 5];

let myArr = new Array(1, 2, 3, 4, 5);
// console.log("myArr ", myArr);

let myArr2 = myArr;
// console.log("myAr2 ", myArr2);

// myArr[4] = 6;

// console.log("myArr ", myArr);
// console.log("myArr2 ", myArr2);

// console.log(typeof myArr);

/// As arrays are object so their value stored in heap memory hence changing value in any instance of a object , changes in all copied instancs

///slice

//console.log(myArr.slice(0, 2));
// console.log(myArr); //No Manupulation of original String

//splice

// console.log(myArr.splice(0, 2));
// console.log(myArr); // Manupulation of original String

// const arr3 = myArr.splice(0, 2);
// console.log(arr3); // Manupulation of original String

//join

//Join

console.log(myArr.join()); // converts to string

console.log(typeof myArr.join());
