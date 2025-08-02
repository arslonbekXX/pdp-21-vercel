import { Bank, Payment, User } from ".";

const user1 = new User("Kent", "+998998961348", 10000);
const user2 = new User("Mark", "+998991234567", 20000);

console.log(user1.getInfo());
console.log(user2.getInfo());

const payment1 = new Payment(user1, user2, 5000);
const payment2 = new Payment(user2, user1, 6000);

console.log(payment1.getDetails());
console.log(payment2.getDetails());

const bank = new Bank("IMAN INVEST");
bank.addUsers(user1, user2);

bank.processPayment(payment1);
console.log(payment1.getDetails());

bank.processPayment(payment2);
console.log(payment2.getDetails());

console.log(user1.getInfo());
console.log(user2.getInfo());
