// basic comparison

// console.log(10 > 5);
// ans:true

// console.log(6 > 10);
// ans:false

// console.log(10 < 5);
// ans: false;

// console.log(5 < 10);
// ans: true

// console.log(100 >= 100);
// ans: true;

// console.log(100 <= 100);
// ans: true

// console.log(100 == 100);
// ans: true;

// console.log(100 == "100");
// ans: true

// console.log(100 === 100);
// ans:true

// console.log(100 === "100");
// ans:false

// variable to variable comparison

let mangoPrice = 60;
let orangePrice = 160;

// console.log(mangoPrice > orangePrice);
// ans: false;

// console.log(mangoPrice < orangePrice);
// ans:true

// console.log(mangoPrice <= orangePrice);
// ans: true;

// if else conditional

// if (10 > 5) {
//   console.log("Yes, I am Win");
// }

// if (5 < 50) {
//   console.log("I am Win");
// } else {
//   console.log("You Win");
// }

// var shirtPrice = 1200;
// var poloPrice = 900;

// if (shirtPrice >= poloPrice) {
//   console.log("Shirt price WIn");
// } else {
//   console.log("Polo Price win");
// }

let salary = 70000;
let height = 56;
let isBCS = true;

if (salary > 80000 && height > 60) {
  console.log("Tumi biya korte Parba");
} else {
  console.log("Tumi biya korte Parba Nah");
}

if (height > 50 || salary > 80000) {
  console.log("Supatro");
} else {
  console.log("Bad Patro");
}

if ((salary > 56000 && isBCS === true) || height < 70) {
  console.log("Biya Korte Parba");
} else {
  console.log("Biya korte parba nah");
}

// multi level condition

const price = 6000;

if (price >= 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payableAmount = price - discount;
  console.log(payableAmount);
} else {
  console.log(price);
}

const bookPrice = 2000;

if (bookPrice > 6000) {
  // 10% discount
  const discount = (bookPrice * 10) / 100;
  const payableAmount = bookPrice - discount;
  console.log(payableAmount);
} else if (bookPrice >= 3000) {
  // 5% discount
  const discount = (bookPrice * 5) / 100;
  const payableAmount = bookPrice - discount;
  console.log(payableAmount);
} else {
  console.log(bookPrice);
}

// ternary conditional learn

const age = 12;

//basic

if (age > 15) {
  console.log("You can vote");
} else {
  console.log("You cant vote now");
}

// ternary

age < 20 ? console.log("You Can Vote Now") : console.log("You Cant Vote now");

const isPassed = false;

if (!isPassed) {
  console.log("I Hate Relationship");
} else {
  console.log("I Love Relationship");
}
