function funct1(param1) { return ""; }
console.log(funct1(1)); // prints empty string
function funct2(param1, param2) { }
function funct3(param1) { }
function funct4() { return ""; }
function funct5(param1) {
    if (typeof param1 === "boolean") {
        return param1 ? "Yes" : "No";
    }
    else {
        return 0;
    }
}
var expectedString = funct5(true);
var expectedNumber = funct5(new Date());
console.log(expectedString); // prints Yes
console.log(expectedNumber); // prints 0
function returnAnAnonymousFunction() {
    return function () { return 1; };
}
function returnAnAnonymousFunction2() {
    return function () { return 1; };
}
console.log(returnAnAnonymousFunction());
console.log(returnAnAnonymousFunction2());
var variable = function (message) { return message + " world"; };
var variable2 = function (message) { return message + " world"; };
var variable3 = function (message) { return message + " world"; };
console.log(variable("Hello")); // prints Hello world
console.log(variable2("Hello")); // prints Hello world
console.log(variable3("Hello")); // prints Hello world
function functWithOptional(param1) { }
console.log(functWithOptional()); // prints undefined, as the function return void
console.log(functWithOptional(undefined)); // prints undefined, as the function return void 
console.log(functWithOptional(true)); // prints undefined, as the function return void
function functWithUndefined(param1) { }
console.log(functWithUndefined(true)); // prints undefined as function returns void
console.log(functWithUndefined(undefined)); // prints undefined, as the function return void
//function functWithOptional2(param1?: boolean, param2: string): void { } // Doesn't compile
function functWithOptional3(param1, param2) { }
var ClassFullOfFunctions = /** @class */ (function () {
    function ClassFullOfFunctions() {
    }
    ClassFullOfFunctions.prototype.f1 = function () { };
    ClassFullOfFunctions.prototype.f2 = function (p1) { return ""; };
    ClassFullOfFunctions.prototype.f3 = function () { };
    ClassFullOfFunctions.prototype.f4 = function () { return true; };
    return ClassFullOfFunctions;
}());
var object = new ClassFullOfFunctions();
console.log(object.f1()); // prints undefined
// console.log(object.f2(1)); // Doesn't compile because function in the class is private.  
// console.log(object.f3()); // Doesn't compile because function in the class is protected.  
console.log(object.f4()); // prints true
var ClassWithVariableFunctions = /** @class */ (function () {
    function ClassWithVariableFunctions() {
        this.long = function (p1) { return ""; };
        this.short = function (p1) { return ""; };
        this.tiny = function (p1) { return ""; };
    }
    return ClassWithVariableFunctions;
}());
