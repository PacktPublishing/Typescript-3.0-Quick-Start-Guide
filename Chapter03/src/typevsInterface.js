var ia = { m1: "m1", m2: "m2" };
console.log(ia); // prints { m1: "m1", m2: "m2" }
// class ExtendPrimitiv1 implements TPrimitive1 { // Does not compile
// }
var ExtendPrimitiv2 = /** @class */ (function () {
    function ExtendPrimitiv2() {
        this.m1 = "Compile";
    }
    return ExtendPrimitiv2;
}());
var c = {
    m1: "m1"
};
c["m2"] = "m2";
console.log(c); // prints { m1: 'm1', m2: 'm2' }
