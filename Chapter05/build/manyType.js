"use strict";
var manyType;
(function (manyType) {
    const m1 = "a";
    const myOption1 = "run";
    const myOption2 = 123;
    const myOption3 = { option1: "run", option2: 123 };
    console.log(myOption1); // prints run
    console.log(myOption2); // prints 123
    console.log(myOption3); // prints { option1: "run", option2: 123 }
    function functWithUnion(p) {
        return undefined;
    }
    console.log(functWithUnion(true)); // prints undefined
    console.log(functWithUnion(undefined)); // prints undefined
    function functionWithUnion(param1) {
        console.log(param1.b);
    }
    const typeA = { a: "hi", b: "hello" };
    const typeB = { b: "world", c: "universe" };
    functionWithUnion(typeA); // prints hello 
    functionWithUnion(typeB); // prints world
})(manyType || (manyType = {}));
//# sourceMappingURL=manyType.js.map