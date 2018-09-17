let bool1: boolean = true; // true
let bool2: boolean = false; // false
let bool3: boolean = 1 === 1; // true

console.log(bool1); // prints true
console.log(bool2); // prints false
console.log(bool3); // prints true

let bool4: boolean = Boolean("true"); // true
let bool5: boolean = Boolean("TRUE"); // true
let bool6: boolean = Boolean("false"); // true
let bool7: boolean = Boolean("FALSE"); // true
let bool8: boolean = Boolean(NaN); // false

let bool9: boolean = new Boolean("true").valueOf(); // true
let bool10: boolean = new Boolean("false").valueOf(); // true

let bool11: boolean = "true" as any as boolean; // true
let bool12: boolean = "false" as any as boolean; // false

console.log(bool4); // prints true   
console.log(bool5); // prints false
console.log(bool6); // prints true
console.log(bool7); // prints true
console.log(bool8); // prints false
console.log(bool9); // prints true
console.log(bool10);// prints true
console.log(bool11);// prints true
console.log(bool12);// prints false

let bool13 = isTrue("true"); // true
let bool14 = isTrue("false"); // false

function isTrue(s: string): boolean {
    return s.toLocaleLowerCase() === "true";
}

console.log(bool13); // prints true
console.log(bool14); // prints false

