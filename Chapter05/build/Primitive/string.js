"use strict";
let string1 = 's1';
console.log(string1); // prints s1
let string2 = "s2";
console.log(string2); // prints s2
let string3 = `s3`;
console.log(string3); // prints s3
let interpolation1 = `This contains the variable s1: ${string1} as well as ${string2}`;
let interpolation2 = `Can invoke variable function: ${string1.substr(0, 1)} as well as any code like this addition: ${1 + 1}`;
console.log(interpolation1); // prints This contains the variable s1: s1 as well as s2
console.log(interpolation2); // prints Can invoke variable function: s as well as any code like this addition: 2
let multipleLine1 = "Line1" +
    "Line2";
let multipleLine2 = `Line1
    Line2`;
console.log(multipleLine1); // prints Line1Line2
console.log(multipleLine2); // prints Line1
//            Line2
//# sourceMappingURL=string.js.map