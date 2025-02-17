const country = "Bangladesh";
const division = "Dhaka";
const district = `B-Baria`;
const thana = new String("Aminpur");
// console.log(country);
// console.log(division);
// console.log(district);
// console.log(thana);

console.log(typeof country); // string
console.log(typeof division); // string
console.log(typeof district); // string
console.log(typeof thana); // object but under the hod string

// how to check array lenght
// array is mutable
const number = [15, 19, 18, 16, 13, 12];
console.log(number.length); // 6
number[0] = 16; // its working
console.log(number); //[16, 19, 18, 16, 13, 12]

// how to findout array element with index
console.log(number[1]); // 19

// note: string is immutable
const capital = "Dhaka";
console.log(capital);
capital[0] = "F"; // its not working
console.log(capital); // Dhaka
// how to check string data length check
console.log(capital.length);
console.log(capital[2]);
