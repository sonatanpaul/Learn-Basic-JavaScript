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

// javascript always case sensetive
const book1 = "Bangla";
const book2 = "bangla";

// option - 1
if (book1 === book2) {
  console.log("Ami porte boshbo");
} else {
  console.log("Ami porte boshbo nah");
}
// answer: ami porte boshbo nah

// option - 2
if (book1.toLowerCase() === book2.toLowerCase()) {
  console.log("Ami porte boshbo");
} else {
  console.log("Ami porte boshbo nah");
}
// answer: ami porte boshbo

// option - 3
if (book1.toUpperCase() === book2.toUpperCase()) {
  console.log("Ami porte Boshbo");
} else {
  console.log("Ami Porte Boshbo nah");
}
// answer: ami porte boshbo

// how to remove space right side and left side in string
const name1 = " Sonatan";
const name2 = "Sonatan ";
// option -1
if (name1 === name2) {
  console.log("This is my name");
} else {
  console.log("This is not my name");
}

//ans: This is not my name

//option - 2
if (name1.trim() === name2.trim()) {
  console.log("My name is match");
} else {
  console.log("My name is not match");
}

//ans: My name is match
