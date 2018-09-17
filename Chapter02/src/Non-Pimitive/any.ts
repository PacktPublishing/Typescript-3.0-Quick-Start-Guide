let changeMe: any;
changeMe = 1;
changeMe = "string too";
changeMe = false;

let anyDangerous: any = false; // still not a boolean, neither a string
console.log(changeMe.subString(0, 1)); // Compile, but crash at runtime