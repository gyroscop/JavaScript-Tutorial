/*const promiseOne = new Promise((Resolve, Reject) => {
  setTimeout(function () {
    console.log("Action is completed");
    Resolve();
  }, 3000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
  console.log("  ");
});
*/
///promise two
/*
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Action 2 is completed");
    resolve();
  }, 3000);
}).then(function () {
  console.log("Async 2 is completed");
  console.log("  ");
});
*/
/// promise 3 (data consumption)
/*
const promiseThree = new Promise((Resolve, Reject) => {
  setTimeout(function () {
    console.log("Action is completed");
    Resolve({ username: "Dibya", Password: "12345" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
  console.log("  ");
});
*/

//// promise four
/*

const promiseFour = new Promise((resolve, reject) => {
  let error = false;

  if (!error) {
    resolve({ username: "Dibya", password: "12345" });
  } else {
    reject("ERROR : Something is wrong");
  }
});

// promiseFour
//   .then(function (user) {
//     console.log(user.username);

//   })
//   .catch(function (error) {
//     console.log(error);
//   });

promiseFour
  .then(function (user) {
    return user.username;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

///promise five

/*
const promiseFive = new Promise(function (resolve, reject) {
  let error = true;
  if (!error) {
    resolve({ username: "JavaScript", password: "123" });
  } else {
    reject("ERROR : JS went wrong");
  }
});

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive();
*/
///fetch

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUser();

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
