"use strict";
var indexSignature;
(function (indexSignature) {
    const c = {
        "test": "compile",
        123: "compile too"
    };
    console.log(c[123]); // compile too
    const obj = {
        name: "My Name",
        count: 123
    };
    console.log(obj["doesNotExist"]); // Does not compile
    console.log(obj["name"]); // Compile
})(indexSignature || (indexSignature = {}));
//# sourceMappingURL=indexSignature.js.map