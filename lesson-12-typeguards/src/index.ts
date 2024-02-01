// type guards
// type guard sendiri ialah cara yang digunakan untuk memilih mana type data yang akan dieksekusi
// hal ini dapat terjadi apabila type data yang digunakan ialah union type
// dapat diperiksa terlebih dahulu menggunakan typeof

type Id = number | string;

function swapIdType(id: Id) {
  if (typeof id === "string") {
    // dapat menggunakan string method
    return parseInt(id);
  } else {
    // dapat digunakan untuk number method dan properties
    return id.toString();
  }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);
console.log(typeof idOne, typeof idTwo);

//tagged interface
//
interface User {
  type: "user";
  username: string;
  email: string;
  id: Id;
}
// mengapa tidak dapat menggunakan typeof seperti diatas? dikarenakan kita tidak dapat mengecek
// interface type mana yang sedang digunakan
// maka cara yang paling mudah ialah dengan menggunakan hardcode, maka hal ini dapat dicegah
interface Person {
  type: "person";
  firstname: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  if (value.type === "user") {
    console.log(value.email, value.username);
  }
  if (value.type === "person") {
    console.log(value.firstname, value.age);
  }
}
