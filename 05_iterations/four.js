/// for in loop

//objects
const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  // console.log(`${key} is shortcut for ${myObj[key]}`);
}

//map
/*
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
*/ //// does not work

// arrays

const programming_languages = ["JavaScript", "HTML", "CSS"];

for (const language in programming_languages) {
  console.log(programming_languages[language]);
}

// for (const language of programming_languages) {
//   console.log(language);
// }

/*
In for in loop console.log[key] outputs keys only , to get values we need to use Obj[key]
In for of loop console.log[key] outputs values itself

*/

/*
 
Note :
 
for of works for maps , not for objects

for in works for ojects , not for maps

*/
