"use strict";
// function
function addTwoNumbers(a, b) {
  return a + b;
}
const subtractTwoNumbers = (a, b) => {
  return a - b;
};
addTwoNumbers(3, 12);
subtractTwoNumbers(12, 7);
// jika tipe data yang ada pada addAllNumbers adalah void maka tidak memerlukan return total, namun apabila menggunakan return maka data type pada addAllNumbers diperlukan
function addAllNumbers(items) {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
  return total;
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference
function formatGreeting(name, greeting) {
  return `${greeting}, ${name}`;
}
const result = formatGreeting("mario", "hallo");
