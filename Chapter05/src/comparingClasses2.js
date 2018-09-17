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
var compareClasses2;
(function (compareClasses2) {
    var B1 = /** @class */ (function () {
        function B1() {
            this.name = "b1";
        }
        B1.prototype.baseFunct = function () { };
        return B1;
    }());
    var C1 = /** @class */ (function (_super) {
        __extends(C1, _super);
        function C1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.a = 1;
            return _this;
        }
        C1.prototype.funct = function () { };
        return C1;
    }(B1));
    var C2 = /** @class */ (function () {
        function C2() {
            this.name = "c2";
            this.a = 1;
        }
        C2.prototype.funct = function () { };
        C2.prototype.baseFunct = function () { };
        return C2;
    }());
    var c1 = new C1();
    var c2 = new C2(); // Does not compile 
})(compareClasses2 || (compareClasses2 = {}));
