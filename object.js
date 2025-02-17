// how to declare object
const botle = {
  brand: "Apple",
  color: "White",
  Price: 45,
  isClean: true,
};
console.log(botle);

// how to check object property value
const person = {
  name: "Sonatan",
  age: 25,
  profession: "Web Developer",
  married: true,
};

// dot notation
const personName = person.name;
console.log(personName); // Sonatan

// bracket notation
const personAge = person["age"];
console.log(personAge);

const men = {
  name: "Sonatan",
  married: true,
  age: 26,
  profession: "developer",
};
console.log(men);

// how to access object property with variable
const firstName = "name";
// update name
person[firstName] = "Sonatan Paul";
console.log(person[firstName]);

// update property
men.married = false;
men["name"] = "Sonatan Paul";

// delete property
delete men.married;
delete men["age"];
console.log(men);

// how to check object key and values list
const friend = {
  name: "Anik",
  age: 26,
  university: "BU",
  girlFriend: true,
};

const keys = Object.keys(friend);
console.log(keys);

const values = Object.values(friend);
console.log(values);

// nested object

const fruits = {
  name: "Mango",
  Price: 120,
  color: ["orange", "yellow", "pink"],
  taste: {
    good: true,
    bad: true,
  },
};

console.log(fruits.taste.good);
console.log(fruits.color[2]);
