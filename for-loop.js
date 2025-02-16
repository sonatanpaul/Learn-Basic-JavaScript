// increment loop
let sum = 0;

for (let i = 1; i <= 20; i++) {
  sum = sum + i;
  console.log(i);
}
console.log(sum);

// decrement loop
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// how to find out odd number with loop

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log("odd number", i);
  }
}

// how to findout even number with for loop

for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log("even number", i);
  } else {
    console.log("odd number", i);
  }
}

// how to sum total number with for loop

let num = 0;

for (let i = 0; i <= 20; i++) {
  num = num + i;
}

console.log("Total Number", num);

