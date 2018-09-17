var staticNamespace;
(function (staticNamespace) {
    var FakeStaticClass = /** @class */ (function () {
        function FakeStaticClass() {
        }
        FakeStaticClass.f1 = function () { };
        return FakeStaticClass;
    }());
    console.log(FakeStaticClass.m1); // prints undefined
    FakeStaticClass.f1();
    // const instance1 = new FakeStaticClass(); // Doesn't compile
    // class StaticClass {
    //   public static ps: number;
    //   private static privateStatic: number;
    //   protected static protecStatic: number;
    // }
    // StaticClass.ps = 1;
    // console.log(StaticClass.ps); // prints 1
    var StaticClass = /** @class */ (function () {
        function StaticClass() {
        }
        StaticClass.prototype.nonStaticFunction = function () {
            StaticClass.ps;
            StaticClass.privateStatic;
            StaticClass.protecStatic;
        };
        return StaticClass;
    }());
})(staticNamespace || (staticNamespace = {}));
