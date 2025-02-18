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
  if (number.length === 11 && number.includes("01") && !number.includes(" ")) {
    return true;
  } else if (typeof number !== "string") {
    return "Invalid";
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

