function noNeedConstLetvar(parameter1: number) { }

let boolean1: number = Number(true);
console.log(boolean1); // prints 1
let boolean2: number = Number(false);
console.log(boolean2); // prints 0

let boolean3: number = true ? 1 : 0;
console.log(boolean3); // prints 1
let boolean4: number = false ? 1 : 0;
console.log(boolean4); // prints 0

let boolean5: number = +true;
console.log(boolean5); // prints 1
let boolean6: number = +false;
console.log(boolean6); // prints 0

let string1: number = Number("123.5");
console.log(string1); // prints 123.5
let string2: number = Number("-123.5");
console.log(string2); // prints -123.5

let string3: number = parseInt("123.5", 10);
console.log(string3); // prints 123
let string4: number = parseInt("-123.5", 10);
console.log(string4); // prints -123

let string5: number = +"123.5";
console.log(string5); // prints 123.5
let string6: number = +"-123.5";
console.log(string6); // prints -123.5

let numeric_separator: number = 9_000_100;
console.log(numeric_separator); // prints 9000100

let number1: number = 0x10;
console.log(number1); // prints 16
let number2: number = 0b10;
console.log(number2); // prints 2
let number3: number = 0o10;
console.log(number3); // prints 8
