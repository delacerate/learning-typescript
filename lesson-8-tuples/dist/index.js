"use strict";
// tuples
//
let person = ["ryu", 25, true];
//tuples example
let hsla;
hsla: [200, "100%", "50%", 1];
let xy;
xy: [94.7, 20.1];
function useCoord() {
    // get some coordinates
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoord();
let user;
user = ["peach", 25];
console.log(user[1]);
