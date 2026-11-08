// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

function countDown(time) {
  console.log(String(time));

  if (time === 0) {
    console.log("Time's up!");
    return;
  }

  setTimeout(() => countDown(time - 1), 1000);
}

countDown(5);
    