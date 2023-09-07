/// Immediately invoked function expression (IIFE)

/*
(function chai() {
  console.log("Chai is ready");
})();
*/

/*
The above expression is similar as 

function chai() {
  console.log("Chai is ready");
};
chai()


*/

/* Two IIFI functions in same file*/
(function iif1() {
  console.log("Hi! This is IIFI one");
})();

// while declaring two IIFI's in same file ";" is important after declaring the functions. Somtimes
// even code formatter can not identify it , thus failing the execution of file

(function iif2() {
  console.log("Hi! This is IIFI two");
})();

//  arrow iifi functions

(() => console.log("Hi! This is arrow IIFI "))();

// IIFI functions with arguments

((friend) =>
  console.log(
    `Hi there ! This is arrow IIFI again , but this time I have a guest ${friend}`
  ))("Guest_IIFI");

/*
NOTES 
------

1. IIFE is primarily used for declaring functions that needs to be executed immediately without fail when
code is scanning the file

2. IIFE syntax is such as it has its own scope and any global variable can not pollute the function

*/
