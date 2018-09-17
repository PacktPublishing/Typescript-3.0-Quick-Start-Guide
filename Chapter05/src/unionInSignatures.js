var union;
(function (union) {
    // function f(p: number | string): boolean | Date {
    //   if (typeof p === "number") {
    //     return true;
    //   }
    //   return new Date();
    // }
    // const r1: boolean = f(1); // Does not compile
    // const r2: Date = f("string"); // Does not compile
    function f(p) {
        if (typeof p === "number") {
            return true;
        }
        return new Date();
    }
    var r1 = f(1);
    var r2 = f("string");
    console.log(r1); // prints true
    console.log(r2); // prints 2018-08-25T07:39:38.142Z
    function g(p, q) {
    }
    g(1, "123"); // Doesn't compile
    g(1, 2);
    g("1", "2");
})(union || (union = {}));
