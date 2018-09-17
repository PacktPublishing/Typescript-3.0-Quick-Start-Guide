var m = {
    a: "A",
    b: "B",
    c: "C"
};
console.log(m); // prints { a: 'A', b: 'B', c: 'C' }
function intersectGeneric(t1) {
    var x = { a: "a", b: "b" };
    return Object.assign({}, x, t1);
}
var result = intersectGeneric({ c: "c" });
console.log(result); // { a: 'a', b: 'b', c: 'c' }
var d1 = { a: "a", b: "b", c: "c" };
var d2 = { a: "a", b: "b", c: "c" };
console.log(typeof d1); // prints Object
console.log(typeof d2); // prints Object
console.log(d1 === d2); // prints False
d2 = d1;
console.log(d1 === d2); // prints True
var d3 = { a: "a", b: "b", c: "c" };
var d4 = { a: "a", b: "b", c: "c" };
var d5 = { a: "a", b: "b", c: "c" };
var d6 = { a: "a", b: "b", c: "c" };
console.log(d3); // prints { a: "a", b: "b", c: "c" }
console.log(d4); // prints { a: "a", b: "b", c: "c" }
console.log(d5); // prints { a: "a", b: "b", c: "c" }
console.log(d6); // prints { a: "a", b: "b", c: "c" }
var ClassA = /** @class */ (function () {
    function ClassA() {
        this.m1 = "m1";
    }
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
        this.m2 = "m1";
    }
    return ClassB;
}());
var classAb = { m1: "test", m2: "test2" };
console.log(classAb); // prints { m1: "test", m2: "test2" }
var same = { m1: "This is required" };
console.log(same); // prints { m1: "This is required" }
