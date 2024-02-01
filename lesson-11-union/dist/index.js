"use strict";
// union type
// ini bisa jadi number atau string
let someId;
someId = 1;
someId = "2";
let email = null;
email = "mario@dicoba.com";
email = null;
let anotherId;
anotherId = "1k274khkas";
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    parseInt(id);
    // ini tidak bisa dilakukan dikarenakan kita tidak bisa pass union type kedalam function,
    // kita hanya bisa menggunakan props dan method untuk itu
    return id;
}
swapIdType(5);
//contoh yang dapat digunakan ialah seperti berikut
// function swapIdType(id: Id): Id {
//   if (typeof id === "string") {
//     return parseInt(id);
//   } else {
//     return id.toString();
//   }
// }
//
//
// IMPORTANT Anda benar, dalam TypeScript, ketika Anda menggunakan Union Types dalam parameter fungsi,
// Anda hanya dapat menggunakan properti dan metode yang tersedia di kedua tipe yang ada dalam Union Types tersebut.
// Anda tidak bisa menggunakan metode yang hanya tersedia di salah satu tipe.
// Dalam contoh yang Anda berikan, parseInt(id) tidak diperbolehkan karena parseInt() hanya tersedia untuk tipe string,
// sedangkan number tidak memiliki metode parseInt().
// Ini merupakan contoh yang baik dari salah satu keterbatasan dalam menggunakan Union Types di dalam fungsi.
