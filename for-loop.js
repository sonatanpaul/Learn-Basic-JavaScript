// increment loop
// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   sum = sum + i;
//   console.log(i);
// }
// console.log(sum);

// decrement loop
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// how to find out odd number with loop

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 1) {
//     console.log("odd number", i);
//   }
// }

// how to findout even number with for loop

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 === 0) {
//     console.log("even number", i);
//   } else {
//     console.log("odd number", i);
//   }
// }

// how to sum total number with for loop

// let num = 0;

// for (let i = 0; i <= 20; i++) {
//   num = num + i;
// }

// console.log("Total Number", num);

// how to increment two or more with even number

// for (let i = 1; i < 20; i += 2) {
//   console.log(i);
// }

// odd number

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// give me the list of numbers between 1 to thirty divisible by 5

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//give me the list of numbers between 1 to thirty divisible by 5 & 3

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("new", i);
//   }
// }

// for (let i = 0; i <= 30; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     console.log(i);
//   }
// }

let number = 0;
for (let i = 0; i <= 30; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
    number = number + i;
  }
}

console.log(number);
