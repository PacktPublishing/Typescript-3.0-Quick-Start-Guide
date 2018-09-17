"use strict";
let bool1 = true; // true
let bool2 = false; // false
let bool3 = 1 === 1; // true
console.log(bool1); // prints true
console.log(bool2); // prints false
console.log(bool3); // prints true
let bool4 = Boolean("true"); // true
let bool5 = Boolean("TRUE"); // true
let bool6 = Boolean("false"); // true
let bool7 = Boolean("FALSE"); // true
let bool8 = Boolean(NaN); // false
let bool9 = new Boolean("true").valueOf(); // true
let bool10 = new Boolean("false").valueOf(); // true
let bool11 = "true"; // true
let bool12 = "false"; // false
console.log(bool4); // prints true   
console.log(bool5); // prints false
console.log(bool6); // prints true
console.log(bool7); // prints true
console.log(bool8); // prints false
console.log(bool9); // prints true
console.log(bool10); // prints true
console.log(bool11); // prints true
console.log(bool12); // prints false
let bool13 = isTrue("true"); // true
let bool14 = isTrue("false"); // false
function isTrue(s) {
    return s.toLocaleLowerCase() === "true";
}
console.log(bool13); // prints true
console.log(bool14); // prints false
//# sourceMappingURL=boolean.js.map