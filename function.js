// how to declare function
function myFunction() {
  console.log("Hello World !");
}
// function invoked or function call
myFunction();

// learn function parameter and argument
// single parameter
function square(number) {
  const multi = number * number;
  console.log(multi);
}

square(6);

// multi parameter
function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

add(5, 6);

// odd number function
function odd(num1, num2) {
  const result = num1 - num2;
  console.log(result);
}

const num1 = 520;
const num2 = 220;
odd(num1, num2);

// learn javascript function return keyword

function tenTimes(number) {
  const result = number * 10;
  return result;
}

tenTimes(10);

const output = tenTimes(15);
console.log(output);
