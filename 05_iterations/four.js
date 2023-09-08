/// for in loop

//objects
const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
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

/*
 
Note :
 
for of works for maps , not for objects

*/
