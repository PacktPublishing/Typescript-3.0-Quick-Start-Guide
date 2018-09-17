var Cast;
(function (Cast) {
    var something = 1;
    var variable1;
    variable1 = something;
    variable1 = something;
    console.log(variable1); // prints 1
    var t1 = { m1: 123 };
    var t2 = t1;
    console.log(t2); // prints { m1: 123 }
    console.log(t1); // prints { m1: 123 }
    var t3 = { m1: 1, m2: "2", m3: 3 };
    var t4 = t2;
    console.log(t3); // prints { m1: 1, m2: '2', m3: 3 }
    console.log(t4); // prints { m1: 123 }
    var a = 1;
    var b = "2";
    // a = b as number; // Doesn't compile
    a = b;
    console.log(a); // prints 2
})(Cast || (Cast = {}));
