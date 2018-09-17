var n2 = Math.random() > 0.5 ? undefined : "test";
// console.log(n1.substring(0, 1)); // Won't compile since can be null
if (n2 !== undefined) {
    console.log(n2.substring(0, 1));
}
function f1(optional) {
    if (optional === undefined) {
        console.log(optional); // prints undefined
    }
    else {
        console.log(optional); // prints some-string
    }
}
f1();
f1('some-string');
var obj = { test: 1 };
console.log(obj["notInObject"]); // prints undefined
var primitiveWithUndefined = undefined;
function functOptionalArg(primitiveOptional) {
    console.log(primitiveOptional); // prints undefined
} //        undefined
//        1
functOptionalArg();
functOptionalArg(undefined);
functOptionalArg(1);
var i1 = {};
var i2 = { m1: undefined };
console.log(i1.m1 === undefined); // prints True
console.log(i2.m1 === undefined); // prints True
