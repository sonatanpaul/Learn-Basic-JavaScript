// Problem Task - 01
function calculateVAT(amount) {
  let vat = 7.5;
  if (typeof amount === "number" && amount >= 0) {
    let vatAmount = (amount * vat) / 100;
    console.log(vatAmount);
  } else {
    console.log("Invalid");
  }
}
/// Solution Done
calculateVAT("foo");
