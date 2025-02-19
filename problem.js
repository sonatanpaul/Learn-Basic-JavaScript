function calculateSleepTime(sleepTimes) {
  // Check if all elements in the array are numbers
  for (const time of sleepTimes) {
    if (typeof time !== "number") {
      return "Invalid";
    }
  }

  // Calculate total seconds using for...of loop
  let totalSeconds = 0;
  for (const time of sleepTimes) {
    totalSeconds += time;
  }

  // Convert total seconds to hours, minutes, and seconds
  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;

  // Return the result as an object
  return { hour, minute, second };
}

// Example Usage
console.log(calculateSleepTime([3600, 1800, 500, 7200])); // Output: { hour: 3, minute: 11, second: 40 }
console.log(calculateSleepTime([1000, "500", 519])); // Output: "Invalid"
