"use strict";
const m = {
    a: "A",
    b: "B",
    c: "C",
};
console.log(m); // prints { a: 'A', b: 'B', c: 'C' }
function intersectGeneric(t1) {
    const x = { a: "a", b: "b" };
    return Object.assign({}, x, t1);
}
const result = intersectGeneric({ c: "c" });
console.log(result); // { a: 'a', b: 'b', c: 'c' }
let d1 = { a: "a", b: "b", c: "c" };
let d2 = { a: "a", b: "b", c: "c" };
console.log(typeof d1); // prints Object
console.log(typeof d2); // prints Object
console.log(d1 === d2); // prints False
d2 = d1;
console.log(d1 === d2); // prints True
let d3 = { a: "a", b: "b", c: "c" };
let d4 = { a: "a", b: "b", c: "c" };
let d5 = { a: "a", b: "b", c: "c" };
let d6 = { a: "a", b: "b", c: "c" };
console.log(d3); // prints { a: "a", b: "b", c: "c" }
console.log(d4); // prints { a: "a", b: "b", c: "c" }
console.log(d5); // prints { a: "a", b: "b", c: "c" }
console.log(d6); // prints { a: "a", b: "b", c: "c" }
class ClassA {
    constructor() {
        this.m1 = "m1";
    }
}
class ClassB {
    constructor() {
        this.m2 = "m1";
    }
}
const classAb = { m1: "test", m2: "test2" };
console.log(classAb); // prints { m1: "test", m2: "test2" }
let same = { m1: "This is required" };
console.log(same); // prints { m1: "This is required" }
//# sourceMappingURL=mergeType.js.map