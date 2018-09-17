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
var abstractPattern;
(function (abstractPattern) {
    var MainClass = /** @class */ (function () {
        function MainClass() {
        }
        MainClass.prototype.mainCoreLogic = function () {
            // Code here [A]
            this.delegatedLogic();
            // Code here [B]
        };
        return MainClass;
    }());
    var CustomLogic = /** @class */ (function (_super) {
        __extends(CustomLogic, _super);
        function CustomLogic() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomLogic.prototype.delegatedLogic = function () {
            // Do some custom logic here [C]
        };
        return CustomLogic;
    }(MainClass));
    var c = new CustomLogic();
    c.mainCoreLogic();
    var Calculus = /** @class */ (function () {
        function Calculus() {
        }
        Calculus.prototype.isAboveZero = function (a, b) {
            var positiveA = Math.abs(a);
            var positiveB = Math.abs(b);
            var result = this.delegatedLogic(positiveA, positiveB);
            return result > 0;
        };
        return Calculus;
    }());
    var AddLogic = /** @class */ (function (_super) {
        __extends(AddLogic, _super);
        function AddLogic() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AddLogic.prototype.delegatedLogic = function (a, b) {
            return a * b;
        };
        return AddLogic;
    }(Calculus));
    var multi = new AddLogic();
    var boolean = multi.isAboveZero(1, 2);
    console.log(boolean); // prints true
    var CalculusWithoutAbstract = /** @class */ (function () {
        function CalculusWithoutAbstract(delegatedLogic) {
            this.delegatedLogic = delegatedLogic;
        }
        CalculusWithoutAbstract.prototype.isAboveZero = function (a, b) {
            var positiveA = Math.abs(a);
            var positiveB = Math.abs(b);
            var result = this.delegatedLogic(positiveA, positiveB);
            return result > 0;
        };
        return CalculusWithoutAbstract;
    }());
    var multi2 = new CalculusWithoutAbstract(function (a, b) { return a * b; });
    var boolean2 = multi2.isAboveZero(1, 2);
    console.log(boolean2); // prints true
})(abstractPattern || (abstractPattern = {}));
