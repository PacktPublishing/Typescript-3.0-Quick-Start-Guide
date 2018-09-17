"use strict";
const ia = { m1: "m1", m2: "m2" };
console.log(ia); // prints { m1: "m1", m2: "m2" }
// class ExtendPrimitiv1 implements TPrimitive1 { // Does not compile
// }
class ExtendPrimitiv2 {
    constructor() {
        this.m1 = "Compile";
    }
}
const c = {
    m1: "m1"
};
c["m2"] = "m2";
console.log(c); // prints { m1: 'm1', m2: 'm2' }
//# sourceMappingURL=typevsInterface.js.map