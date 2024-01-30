// tuples
//
let person: [string, number, boolean] = ["ryu", 25, true];

//tuples example

let hsla: [number, string, string, number];
hsla: [200, "100%", "50%", 1];

let xy: [number, number];
xy: [94.7, 20.1];

function useCoord(): [number, number] {
  // get some coordinates
  const lat = 100;
  const long = 50;

  return [lat, long];
}
const [lat, long] = useCoord();

let user: [name: string, age: number];

user = ["peach", 25];
console.log(user[1]);
