"use strict";
// type guards
// type guard sendiri ialah cara yang digunakan untuk memilih mana type data yang akan dieksekusi
// hal ini dapat terjadi apabila type data yang digunakan ialah union type
// dapat diperiksa terlebih dahulu menggunakan typeof
function swapIdType(id) {
    if (typeof id === "string") {
        // dapat menggunakan string method
        return parseInt(id);
    }
    else {
        // dapat digunakan untuk number method dan properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
console.log(typeof idOne, typeof idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstname, value.age);
    }
}
