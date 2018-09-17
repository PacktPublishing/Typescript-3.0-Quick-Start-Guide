"use strict";
function noNeedConstLetvar(parameter1) { }
let boolean1 = Number(true);
console.log(boolean1); // prints 1
let boolean2 = Number(false);
console.log(boolean2); // prints 0
let boolean3 = true ? 1 : 0;
console.log(boolean3); // prints 1
let boolean4 = false ? 1 : 0;
console.log(boolean4); // prints 0
let boolean5 = +true;
console.log(boolean5); // prints 1
let boolean6 = +false;
console.log(boolean6); // prints 0
let string1 = Number("123.5");
console.log(string1); // prints 123.5
let string2 = Number("-123.5");
console.log(string2); // prints -123.5
let string3 = parseInt("123.5", 10);
console.log(string3); // prints 123
let string4 = parseInt("-123.5", 10);
console.log(string4); // prints -123
let string5 = +"123.5";
console.log(string5); // prints 123.5
let string6 = +"-123.5";
console.log(string6); // prints -123.5
let numeric_separator = 9000100;
console.log(numeric_separator); // prints 9000100
let number1 = 0x10;
console.log(number1); // prints 16
let number2 = 0b10;
console.log(number2); // prints 2
let number3 = 0o10;
console.log(number3); // prints 8
//# sourceMappingURL=number.js.map