"use strict";
// any type
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
  hello: "world",
};
// any types in arrays
let things = ["hello", true, 30, null];
things.push({ id: 123 });
// function and any
function addTogether(value) {
  return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
// useful when migrating from js to ts
// because using any wont cause errors initially
