// for of loop

/*

const Asian_Country = ["India", "China", "Japan", "Malaysia"];

for (country of Asian_Country) {
  console.log(
    `Population of ${country} ${Math.round(Math.random() * 10 ** 10)}`
  );
}

*/

//for loop with Maps

/*

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, " :- ", value);
}

*/

// For loop with Objects

const obj = {
  game1: "NFS",
  game2: "Spiderman",
};

for ([key, value] in obj) {
  console.log(key, " :- ", value);
}
