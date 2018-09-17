var bool1 = true; // true
var bool2 = false; // false
var bool3 = 1 === 1; // true
console.log(bool1); // prints true
console.log(bool2); // prints false
console.log(bool3); // prints true
var bool4 = Boolean("true"); // true
var bool5 = Boolean("TRUE"); // true
var bool6 = Boolean("false"); // true
var bool7 = Boolean("FALSE"); // true
var bool8 = Boolean(NaN); // false
var bool9 = new Boolean("true").valueOf(); // true
var bool10 = new Boolean("false").valueOf(); // true
var bool11 = "true"; // true
var bool12 = "false"; // false
console.log(bool4); // prints true   
console.log(bool5); // prints false
console.log(bool6); // prints true
console.log(bool7); // prints true
console.log(bool8); // prints false
console.log(bool9); // prints true
console.log(bool10); // prints true
console.log(bool11); // prints true
console.log(bool12); // prints false
var bool13 = isTrue("true"); // true
var bool14 = isTrue("false"); // false
function isTrue(s) {
    return s.toLocaleLowerCase() === "true";
}
console.log(bool13); // prints true
console.log(bool14); // prints false
