var Tuple;
(function (Tuple) {
    var tuple1 = ["First name", "Last Name", 1980]; // Infered as (string |number)[]
    tuple1[2] = "Not a number";
    var tuple2 = ["First name", "Last Name", 1980]; // Tuple
    // tuple2[2] = "Not a number"; // Does not compile
    var tuple3;
    // tuple3 = ["Only One"]; // Does not compile
    // tuple3 = ["One", "Two", 3, "four"]; // Does not compile
    // tuple3[5] = "12"; // Compile
    // tuple3[5] = "12"; // Compile, do not mind the type
    // tuple3[1]= 2; // Does not compile, require to be a string
    function restFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var p1 = args[0];
        var p2 = args[1];
        var p3 = args[2];
        // Code
    }
    function resultFunction(p1, p2, p3) {
        // Code
    }
    var tuple4 = [0, "one", false];
    var array4 = [0, "one", false];
    restFunction.apply(void 0, tuple4);
    // restFunction(...array4); // Doesn't compile
    restFunction(tuple4[0], tuple4[1], tuple4[2]);
    // restFunction(array4[0],array4[1],array4[2]); // Does not compile
    // let tuple5: [number, string?, boolean?];
    // tuple5 = [1];
    // tuple5 = [1, "two"];
    // tuple5 = [1, "two", false];
    // console.log(tuple5); // prints [1, "two", false] 
    var tuple5;
    var tuple6 = [1, "Test"];
    console.log(tuple6); // prints [1, "Test"]
})(Tuple || (Tuple = {}));
