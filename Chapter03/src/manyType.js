var manyType;
(function (manyType) {
    var m1 = "a";
    var myOption1 = "run";
    var myOption2 = 123;
    var myOption3 = { option1: "run", option2: 123 };
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
    var typeA = { a: "hi", b: "hello" };
    var typeB = { b: "world", c: "universe" };
    functionWithUnion(typeA); // prints hello 
    functionWithUnion(typeB); // prints world
})(manyType || (manyType = {}));
