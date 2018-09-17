var interfaceConstructor;
(function (interfaceConstructor) {
    function entityFactory(ctor, value) {
        return new ctor(value);
    }
    var Implementation1 = /** @class */ (function () {
        function Implementation1(value) {
            this.member1 = value;
        }
        Implementation1.prototype.funct = function () {
        };
        return Implementation1;
    }());
    var impl1 = entityFactory(Implementation1, 1);
    console.log(impl1); // prints Implementation1 { member1: 1 } 
    // class Implementation2 {
    //     constructor(value: number) { }
    // }
    // let impl2 = entityFactory(Implementation2, 1); // Does not compile
    var Implementation3 = /** @class */ (function () {
        function Implementation3() {
            this.member1 = 1;
            console.log(arguments);
        }
        Implementation3.prototype.funct = function () {
        };
        return Implementation3;
    }());
    var impl3 = entityFactory(Implementation3, 1);
    console.log(impl3); // prints Implementation1 { member1: 1 } 
})(interfaceConstructor || (interfaceConstructor = {}));
