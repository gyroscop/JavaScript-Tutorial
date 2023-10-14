function CalculateDiscount(activemembersince) {
  let discount = 0;
  if (this.activemembersince > 365) {
    discount = 50;
  } else {
    discount = 30;
  }

  return discount;
}

function UserProfile(id, name, activemembersince, discount) {
  this.id = id;
  this.name = name;
  this.activemembersince = activemembersince;
  this.discount = CalculateDiscount.call(this, activemembersince);
  //   return `${this.name} is active since ${this.activemembersince} days , so he is eligible for ${this.discount} % discount`;
}

const user1 = new UserProfile(1, "Dibya", 600);
console.log(user1);
