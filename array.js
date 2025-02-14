// array declare
const numbers = [2, 3, 4, 5, 6, 8, 4, 5];
console.log(numbers);

// how to check array length
const arrayLength = [5, 3, 5, 6, 4, 5, 6, 5, 4, 5];
console.log(arrayLength.length);

// get element value by index
const position = [5, 6, 5, 4, 4, 8];
const thirdPosition = position[2];
console.log(thirdPosition);

// set or update element value by index
const setElement = [5, 6, 3, 21, 4, 54];
setElement[3] = 14;
console.log(setElement); // 5, 6, 3, 14, 4, 54

// how to add element with array last element
const lastElement = [12, 5, 2, 6, 8, 5];
lastElement.push(10);
console.log(lastElement); // 12, 5, 2, 6, 8, 5, 10

// how to add element array with first element
const firstElement = [5, 6, 54, 5, 4, 5, 8];
firstElement.unshift(14);
console.log(firstElement);

// how to remove last element with array
const removeLastElement = [14, 15, 16, 17, 18];
removeLastElement.pop();
console.log(removeLastElement); // 14, 15, 16, 17

// how to remove first element with array
const removeFirstElement = [21, 22, 23, 24, 25];
removeFirstElement.shift();
console.log(removeFirstElement); //22, 23, 24, 25

// how to find element with includes method
const findElement = [2, 5, 6, 4, 3, 12, 4, 5, 2, 3, 5];
const findResult = findElement.includes(12);
console.log(findResult); //true
const anotherResult = findElement.includes(14);
console.log(anotherResult); //false

// how to check element to index with array
const cityName = ["Pabna", "Dhaka", "Cumilla", "Bogura"];
const indexElement = cityName.indexOf("Dhaka");
console.log(indexElement); // 1
const anotherIndexElement = cityName.indexOf("Barishal");
console.log(anotherIndexElement); // -1

// how to check array or not array
const persons = ["Akash", "Bikash", "Anik"];
const result = Array.isArray(persons);
console.log(result); // true

// another try
const name = "Sonatan Paul";
const isArray = Array.isArray(name);
console.log(isArray); // false

// array join method
const joinArray = [56, 55, 15, 18, 19, 55];
const joinResult = joinArray.join("-");
console.log(joinResult); // 56-55-15-18-19-55

// array concut

const bigCity = ["Dhaka", "Rajshahi"];
const smallCity = ["Pabna", "Bogura"];
const cityResult = bigCity.concat(smallCity);
console.log(cityResult);
