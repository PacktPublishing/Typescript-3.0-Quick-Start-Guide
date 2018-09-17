var arrayWithSquareBrackets = [1, 2, 3];
var arrayWithObject = [1, 2, 3];
var arrayWithObjectNew = new Array(1, 2, 3);
console.log(arrayWithSquareBrackets); // prints [ 1, 2, 3 ]
console.log(arrayWithObject); // prints [ 1, 2, 3 ]
console.log(arrayWithObjectNew); // prints [ 1, 2, 3 ]
var arrayWithSquareBrackets2 = [1, 2, "one", "two"];
var arrayWithObject2 = [1, 2, "one", "two"];
var position1 = arrayWithObject2[0]; // 1
var unexisting = arrayWithObject2[100]; // undefined
console.log(position1); // prints 1
console.log(unexisting); // prints undefined
arrayWithSquareBrackets.forEach(function (element) {
    console.log(element); // 1
}); // 2
// 3 
