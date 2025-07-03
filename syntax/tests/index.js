import assert from "assert";

import { add } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
console.log("ok");

// classes
import { Person, Point, Simple } from "../build/debug.js";

let pt = new Point(5,12);
console.log(pt.distance.toString()); // 13

let s = new Simple(5,5);
let s_xy = s.xy; // returns 25
let s_z = s.z;   // returns 0
s.z = 24;
console.log(s.x.toString());// prints 24

let ted = new Person("Ted", 30);
console.log(ted.name); // prints "Ted"

// {{## BEGIN prototypes ##}}
let origin = new Point(0,0);
console.log(origin.toString());

console.log("Consulting origin...");
for (let member in origin) {
  // This generates an error under 'strict' but still transpiles and works
  //@ts-ignore
  console.log(member,"=",origin[member]);
}

console.log("Consulting origin prototype...");
let originP = Object.getPrototypeOf(origin);
for (let member of Object.getOwnPropertyNames(originP)) {
  console.log(member,"=",originP[member]);
}
// {{## END prototypes ##}}


