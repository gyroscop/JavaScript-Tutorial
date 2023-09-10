//forEach

/* array

// const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });


// coding.forEach((val) => {
//   console.log(val);
// });



// function printMe(val) {
//   console.log(val);
// }

// coding.forEach(printMe);



//// return in forEach
const coding = ["js", "ruby", "java", "python", "cpp"];

const codes = coding.forEach((language) => {
  return language;
});

console.log(codes); /// forEach does not return any values


///hack

const coding = ["js", "ruby", "java", "python", "cpp"];

const coding_copy = [];

coding.forEach((language) => {
  coding_copy.push(language);
});

console.log(coding_copy);

*/

/*
Object

*/

// const myObj = {
//   languageName: "javascript",
//   languageFileName: "js",
// };

// myObj.forEach((element) => {
//   console.log(element.languageName);
// });

///Does not work for objects

// const myObj = [
//   {
//     languageName: "javascript",
//     languageFileName: "js",
//   },
// ];

// myObj.forEach((element) => {
//   console.log(element.languageName);
// });

// to work with objects convert it into array

/* Map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); /// no duplicacy allowed in maps

map.forEach((key, value) => {
  console.log(value, "-->", key);
});

///works for maps
 */
