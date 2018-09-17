var changeMe;
changeMe = 1;
changeMe = "string too";
changeMe = false;
var anyDangerous = false; // still not a boolean, neither a string
console.log(changeMe.subString(0, 1)); // Compile, but crash at runtime
