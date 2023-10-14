/*
JavaScript introduced classes in ECMAScript 2015 (ES6) as 
a syntactical sugar over the existing prototype-based inheritance. 
Classes in JavaScript provide a more structured and familiar way 
to define and work with objects and their behaviors, similar to 
classes in other programming languages.
*/

// Below is a comparison between before ES6 and after ES6 (class introduction)

/// Before ES6
/*

function User(name, password) {
  this.name = name;
  this.password = password;
}

User.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

User.prototype.toUpperCase = function () {
  return `${this.name.toUpperCase()}`;
};

const user1 = new User("Dibya", 12345);

console.log(user1.encryptpassword());
console.log(user1.toUpperCase());

*/

//after ES6

/*

class User_Class {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  encryptpassword_class() {
    return `${this.password}abc`;
  }
  toUpperCase_class() {
    return `${this.name.toUpperCase()}`;
  }
}

const user2 = new User_Class("Dibya", 12345);

console.log(user2.encryptpassword_class());

console.log(user2.toUpperCase_class());


*/
