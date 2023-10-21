/* Class */

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get username() {
    return this._username;
  }
  set username(value) {
    return (this._username = value);
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}

const user1 = new User("Dibya", 123);

user1.password = 321;

console.log(user1.password);

/* Function  */

/*

function User(username, password) {
  this._username = username;
  this._password = password;

  Object.defineProperty(this, "username", {
    get: function () {
      return this._username;
    },

    set: function (value) {
      this.username = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },

    set: function (value) {
      this.password = value;
    },
  });
}

const user1 = new User("Dibya", 789);
console.log(user1.password);


*/

/* Object */

// const user = {

// }
