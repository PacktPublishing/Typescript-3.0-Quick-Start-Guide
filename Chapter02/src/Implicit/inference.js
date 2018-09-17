var inference;
(function (inference) {
    var x = 1;
    var y = 1;
    var z;
    // const d; // Does not compile
    z = 1;
    var d1 = new Date();
    var d2 = new Date();
    // d1 = ''; // Doesn't compile 
    var b1 = true;
    var b2 = false;
    // b2 = ''; // Doesn't compile
    var c1 = {
        m1: 1
    };
    var c2 = {
        m1: 1
    };
    function f1(a) {
        return a;
    }
    function f2(a) {
        return a;
    }
    function f3() {
        if (true) {
            return 1;
        }
        else {
            return "1";
        }
    }
    console.log(f1(1)); // prints 1
    // console.log(f2('')); // Doesn't compile  
    console.log(f3()); // prints 1
})(inference || (inference = {}));
