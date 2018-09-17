var primitiveTypeOf;
(function (primitiveTypeOf) {
    var a = "test";
    var b = 2;
    var c = true;
    var d = "test";
    console.log(typeof a); // string
    console.log(typeof b); // number
    console.log(typeof c); // boolean
    console.log(typeof d); // string
    var e = { complex: "c", obj: 1 };
    console.log(typeof e); // object
    var f = 2;
    if (typeof f === "number") {
        console.log("This is for sure a number");
    }
    var g = undefined;
    var h = null;
    console.log(typeof g); // undefined
    console.log(typeof h); // object
    console.log(g === undefined); // true
    console.log(g === null); // false
    console.log(h === undefined); // false
    console.log(h === null); // true
    function myFunction(value) {
        console.log("Value is number or undefined");
        if (value === undefined) {
            console.log("Value is undefined");
        }
        else {
            console.log("Value is NOT undefined, hence a number");
        }
        console.log("Value is number or undefined");
    }
    myFunction(1);
    myFunction(undefined);
    function myFunction2(value) {
        console.log("Value is number or undefined");
        if (value === undefined) {
            return;
        }
        console.log("Value is NOT undefined, hence a number");
    }
    myFunction2(1);
    myFunction2(undefined);
})(primitiveTypeOf || (primitiveTypeOf = {}));
