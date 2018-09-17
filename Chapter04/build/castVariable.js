"use strict";
var castVariable;
(function (castVariable) {
    const newObject1 = { a: 1, b: "2" };
    const newObject2 = { a: 1, b: "2" };
    const newObject3 = { a: 1, b: "2", c: "OH NO" };
    const newObject4 = { a: 1 };
    console.log(newObject1); // prints { a: 1, b: "2" }
    console.log(newObject2); // prints { a: 1, b: "2" } 
    console.log(newObject3); // prints { a: 1, b: "2", c: "OH NO" }
    console.log(newObject4); // prints { a: 1 }
})(castVariable || (castVariable = {}));
//# sourceMappingURL=castVariable.js.map