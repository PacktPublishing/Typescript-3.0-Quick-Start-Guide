var InterfaceUseful;
(function (InterfaceUseful) {
    var ClassA = /** @class */ (function () {
        function ClassA() {
        }
        ClassA.prototype.mainFunction = function () {
            this.subFunction1();
            this.subFunction2();
        };
        ClassA.prototype.subFunction1 = function () { };
        ClassA.prototype.subFunction2 = function () { };
        return ClassA;
    }());
    var ClassA2 = /** @class */ (function () {
        function ClassA2() {
        }
        ClassA2.prototype.mainFunction = function () {
            this.subFunction1();
            this.subFunction2();
        };
        ClassA2.prototype.subFunction1 = function () { };
        ClassA2.prototype.subFunction2 = function () { };
        return ClassA2;
    }());
    var E1 = /** @class */ (function () {
        function E1() {
            this.m1 = "E1->m1";
            this.a = 1;
        }
        return E1;
    }());
    var E2 = /** @class */ (function () {
        function E2() {
            this.m1 = "E2->m1";
            this.b = true;
        }
        return E2;
    }());
    var ClassB = /** @class */ (function () {
        function ClassB() {
        }
        ClassB.prototype.consume = function (element) { };
        return ClassB;
    }());
})(InterfaceUseful || (InterfaceUseful = {}));
