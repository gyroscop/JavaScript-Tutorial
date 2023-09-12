const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

//  Syntax : shoppingCart.reduce((accumulator, currentvalue) => (accumulator+currentvalue) , initialValue)

/*
//Type 1 :

let priceToPay = shoppingCart.reduce((acc, currVal) => acc + currVal.price, 0);

console.log(`Final Price to Pay : ${priceToPay}`);

*/

/*
Type 2 : 
*/

shoppingCart.reduce((acc, currVal) => {
  console.log(`acc : ${acc} and currVal : ${currVal}`);
  return acc + currVal;
}, 0);
