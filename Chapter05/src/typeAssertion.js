var TypeAssertion;
(function (TypeAssertion) {
    var myObject = {
        t2: {
            t1: {
                myNumber: 1
            }
        }
    };
    if (myObject !== undefined) {
        if (myObject.t2 !== undefined) {
            if (myObject.t2.t1 !== undefined) {
                if (myObject.t2.t1.myNumber !== undefined) {
                    console.log("My number is :", myObject.t2.t1.myNumber); // prints My number is : 1
                }
            }
        }
    }
    console.log("My number is :", myObject.t2.t1.myNumber); // prints My number is : 1
    var LateInitialization = /** @class */ (function () {
        function LateInitialization() {
            // No initializing here
            this.m1 + 1;
        }
        LateInitialization.prototype.init = function () {
            this.m1 = 1;
        };
        return LateInitialization;
    }());
    var var1;
    var1 = (function () { return "Not undefined but type is still both"; })();
    console.log(var1.substr(0, 5)); // prints Not U
})(TypeAssertion || (TypeAssertion = {}));
