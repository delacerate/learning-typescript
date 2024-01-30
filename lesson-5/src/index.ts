// arrays
//

let names: string[] = ["Mario", "Luigi", "Peach"];
let ages: number[] = [25, 27, 25];

names.push("bowser");
ages.push(35);

// type inference with arrays
//
let fruits = ["apples", "pears", "bananas", "mangos"];
fruits.push("beras");

const f = fruits[4];
console.log(f);

let things = [1, true, "hello"];
const t = things[0];

//object literals

let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 1,
};

user.firstName = "peach";
user.id = 2;

// type inference with object literals

let person = {
  name: "luigi",
  score: 35,
};
person.name = "bowser";
person.score = 50;

const score = person.score;

