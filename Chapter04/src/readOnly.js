var ReadOnlyField;
(function (ReadOnlyField) {
    var i1 = {
        id: "1",
        name: "test"
    };
    // i1.id = "123"; // Does not compile
    var C1 = /** @class */ (function () {
        function C1() {
            this.id = "C1";
            this.id = "Still can change";
        }
        C1.prototype.f1 = function () {
            // this.id = 1; // Doesn't compile
        };
        return C1;
    }());
    // ---
    var C2 = /** @class */ (function () {
        function C2() {
        }
        C2.prototype.CodeHere = function () {
            C2.MY_CONST;
        };
        C2.MY_CONST = "TEST";
        return C2;
    }());
})(ReadOnlyField || (ReadOnlyField = {}));
