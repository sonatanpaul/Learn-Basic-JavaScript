const friends = ["Anik", "Rayhan", "Asraful", "Akash "];

// learn for of loop
for (const friend of friends) {
  console.log(friend);
}

// learn for loop
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// learn while loop
let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

// array reverse method
const book = ["Bangla", "English", "Hindi", "Math"];
console.log(book);
const reverse = book.reverse();
console.log(reverse);

// array sort method
const student = ["badhon", "bijoy", "akash", "zabir", "vhola"];
console.log(student);
const updateStudent = student.sort();
console.log(updateStudent); // sorted method is mutable

// tosorted method
const number = [1, 2, 35, 4, 11, 22, 33, 1, 4, 44];
console.log(number);
const updateNumber = number.toSorted((a, b) => a - b);
console.log(updateNumber); // toSorted method is immutable
