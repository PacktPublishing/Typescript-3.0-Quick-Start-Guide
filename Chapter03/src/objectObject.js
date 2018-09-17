var objectObjectVariable;
(function (objectObjectVariable) {
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        return MyClass;
    }());
    ;
    var bigObject;
    bigObject = 1;
    bigObject = "1";
    bigObject = true;
    // bigObject = Symbol("123");
    bigObject = { a: "test" };
    bigObject = function () { };
    bigObject = [1, 2, 3];
    bigObject = new Date();
    bigObject = new MyClass();
    bigObject = Object.create({});
    var littleObject;
    littleObject = { a: "test" };
    littleObject = new Date();
    littleObject = function () { };
    littleObject = [1, 2, 3];
    littleObject = new MyClass();
    littleObject = Object.create({});
    var acceptNull = null;
    acceptNull = 1;
    // let acceptUndefined: number | undefined = 1;
    // acceptUndefined = null;
    var obj1 = {};
    var obj2 = {};
    var obj3 = {};
    var obj4 = {};
    // obj1.test = "2"; // Does not compile
    // obj2.test = "2"; // Does not compile
    // obj3.test = "2"; // Does not compile
    obj4.test = "2";
    obj1.toString();
    obj2.toString();
    obj3.toString();
    obj4.toString();
    console.log(obj4); // pronts { test: '2' }
})(objectObjectVariable || (objectObjectVariable = {}));
