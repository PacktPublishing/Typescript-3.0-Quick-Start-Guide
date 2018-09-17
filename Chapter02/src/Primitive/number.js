function noNeedConstLetvar(parameter1) { }
var boolean1 = Number(true);
console.log(boolean1); // prints 1
var boolean2 = Number(false);
console.log(boolean2); // prints 0
var boolean3 = true ? 1 : 0;
console.log(boolean3); // prints 1
var boolean4 = false ? 1 : 0;
console.log(boolean4); // prints 0
var boolean5 = +true;
console.log(boolean5); // prints 1
var boolean6 = +false;
console.log(boolean6); // prints 0
var string1 = Number("123.5");
console.log(string1); // prints 123.5
var string2 = Number("-123.5");
console.log(string2); // prints -123.5
var string3 = parseInt("123.5", 10);
console.log(string3); // prints 123
var string4 = parseInt("-123.5", 10);
console.log(string4); // prints -123
var string5 = +"123.5";
console.log(string5); // prints 123.5
var string6 = +"-123.5";
console.log(string6); // prints -123.5
var numeric_separator = 9000100;
console.log(numeric_separator); // prints 9000100
var number1 = 0x10;
console.log(number1); // prints 16
var number2 = 2;
console.log(number2); // prints 2
var number3 = 8;
console.log(number3); // prints 8
