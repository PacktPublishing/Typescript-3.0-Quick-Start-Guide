let n1: string | null = Math.random() > 0.5 ? null : "test";
// console.log(n1.substring(0, 1)); // Won't compile since can be null

if (n1 !== null) {
    console.log(n1.substring(0, 1)); // prints t
}

let primitiveWithNull: number | null = null;
console.log(primitiveWithNull); // prints null
