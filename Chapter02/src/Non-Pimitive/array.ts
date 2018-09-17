let arrayWithSquareBrackets: number[] = [1, 2, 3];
let arrayWithObject: Array<number> = [1, 2, 3];
let arrayWithObjectNew: Array<number> = new Array<number>(1, 2, 3);

console.log(arrayWithSquareBrackets); // prints [ 1, 2, 3 ]
console.log(arrayWithObject); // prints [ 1, 2, 3 ]
console.log(arrayWithObjectNew); // prints [ 1, 2, 3 ]

let arrayWithSquareBrackets2: (number | string)[] = [1, 2, "one", "two"];
let arrayWithObject2: Array<number | string> = [1, 2, "one", "two"];

const position1 = arrayWithObject2[0]; // 1
const unexisting = arrayWithObject2[100]; // undefined

console.log(position1); // prints 1
console.log(unexisting); // prints undefined

arrayWithSquareBrackets.forEach((element: number) => {
    console.log(element); // 1
});                       // 2
                          // 3 