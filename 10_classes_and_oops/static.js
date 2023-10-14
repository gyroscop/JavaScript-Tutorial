// static keyword blocks the use of the method in child classes , constants and inherited classes

class User_Class {
  static id = 1;
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  encryptpassword_class() {
    return `${this.password}abc`;
  }
  /*static*/ toUpperCase_class() {
    return `${this.name.toUpperCase()}`;
  }
}

// const user2 = new User_Class("Dibya", 12345);

// console.log(user2.toUpperCase_class());
// console.log(user2.id);

class Dummy_Users extends User_Class {
  constructor(name) {
    super(name);
  }
}

const user3 = new Dummy_Users("Dibya_Dummy");
console.log(user3.toUpperCase_class());
