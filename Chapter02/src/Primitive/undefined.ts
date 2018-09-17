let n2: string | undefined = Math.random() > 0.5 ? undefined : "test";
// console.log(n1.substring(0, 1)); // Won't compile since can be null

if (n2 !== undefined) {
    console.log(n2.substring(0, 1));
}

function f1(optional?: string): void {
    if (optional === undefined) {
        console.log(optional); // prints undefined
    } else {
        console.log(optional); // prints some-string
    }
}

f1();
f1('some-string');

let obj = { test: 1 };
console.log(obj["notInObject"]); // prints undefined

let primitiveWithUndefined: number | undefined = undefined;
function functOptionalArg(primitiveOptional?: number): void {
    console.log(primitiveOptional); // prints undefined
}                                   //        undefined
                                    //        1

functOptionalArg(); 
functOptionalArg(undefined);
functOptionalArg(1);

interface InterfaceWithUndefined {
    m1?: number;
}

let i1: InterfaceWithUndefined = {};
let i2: InterfaceWithUndefined = { m1: undefined };

console.log(i1.m1 === undefined); // prints True
console.log(i2.m1 === undefined); // prints True