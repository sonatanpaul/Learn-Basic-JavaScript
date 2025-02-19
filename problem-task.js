// Problem Task - 01
function calculateVAT(amount) {
  let vat = 7.5;
  if (typeof amount === "number" && amount >= 0) {
    let vatAmount = (amount * vat) / 100;
    return vatAmount;
  } else {
    return "Invalid";
  }
}
/// Solution Done
calculateVAT("foo");

//---------------------------------------------------------------------
// Problem Task - 2

function validContact(number) {
  if (typeof number !== "string") {
    return "Invalid";
  }
  if (number.length === 11 && number.includes("01") && !number.includes(" ")) {
    return true;
  } else {
    return false;
  }
}
// Solution Done
validContact(true);

// -----------------------------------------------------------------------

// Problem Task - 3

function willSuccess(marks) {
  let passMark = [];
  let failMark = [];

  if (Array.isArray(marks)) {
    for (const mark of marks) {
      if (mark >= 50) {
        passMark.push(mark);
      } else {
        failMark.push(mark);
      }
    }

    if (passMark.length > failMark.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

// Solution Done
willSuccess(90);

//-----------------------------------------------------------

// Problem Task - 4

function validProposal(person1, person2) {
  let ageDifference = Math.abs(person1.age - person2.age);

  if (typeof person1 === "object" && typeof person2 === "object") {
    if (ageDifference <= 7 && person1.gender !== person2.gender) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

// Solution Done
validProposal("sonatan", "fas");

// -----------------------------------------------------------

// Problem Task - 5

function calculateSleepTime(times) {
  let totalNumber = 0;
  for (const time of times) {
    if (typeof time === "number") {
      totalNumber = totalNumber + time;
    } else {
      return "Invalid";
    }
  }

  const hours = Math.floor(totalNumber / 3600);
  const minutes = Math.floor((totalNumber % 3600) / 60);
  const seconds = totalNumber % 60;

  return { hour: hours, minute: minutes, second: seconds };
}

// Solution Done
const output = calculateSleepTime([1000, 499, 519, 300]);
console.log(output);
