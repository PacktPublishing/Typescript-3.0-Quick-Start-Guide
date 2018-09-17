var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var typeOfLimitations;
(function (typeOfLimitations) {
    var MyClass1 = /** @class */ (function () {
        function MyClass1() {
            this.member1 = "default";
            this.member2 = 123;
        }
        return MyClass1;
    }());
    var MyClass2 = /** @class */ (function () {
        function MyClass2() {
            this.member1 = "default";
            this.member2 = 123;
        }
        return MyClass2;
    }());
    var a = new MyClass1();
    var b = new MyClass2();
    if (a instanceof MyClass1) {
        console.log("a === MyClass1");
    }
    if (b instanceof MyClass2) {
        console.log("b === MyClass2");
    }
    // type MyType = instanceOf MyClass1;
    var MyClass3 = /** @class */ (function (_super) {
        __extends(MyClass3, _super);
        function MyClass3() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.member3 = true;
            return _this;
        }
        return MyClass3;
    }(MyClass2));
    var c = new MyClass3();
    if (c instanceof MyClass2) {
        console.log("c === MyClass2");
    }
    if (c instanceof MyClass3) {
        console.log("c === MyClass3");
    }
})(typeOfLimitations || (typeOfLimitations = {}));
