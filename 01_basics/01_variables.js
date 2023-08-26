const accountId = 243421;
let accountName = "Dibya Sarmah";
var accountEmail = "djs@google.com";
accountCity = "Kolkata";
let accountState;

/*
 Not prefer to use 'var'
 because of the issue in block scope and functional scope
*/

console.table([
  accountId,
  accountName,
  accountEmail,
  accountCity,
  accountState,
]);
