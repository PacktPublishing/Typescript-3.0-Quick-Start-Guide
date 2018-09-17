var compareClasses;
(function (compareClasses) {
    var C1 = /** @class */ (function () {
        function C1() {
            this.a = 1;
            this.p = "p";
        }
        C1.prototype.funct = function () { };
        return C1;
    }());
    var C2 = /** @class */ (function () {
        function C2() {
            this.a = 1;
            this.p = "p";
        }
        C2.prototype.funct = function () { };
        return C2;
    }());
    var c1 = new C1();
    var c2 = new C2();
    var c12 = new C2(); // Does not compile
    function executeClass1(c1) {
        c1.funct();
    }
    executeClass1(c1);
    executeClass1(c2); // Does not compile
    executeClass1(c12);
})(compareClasses || (compareClasses = {}));
