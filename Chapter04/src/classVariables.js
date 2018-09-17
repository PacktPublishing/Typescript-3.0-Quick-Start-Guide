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
var classVariables;
(function (classVariables) {
    var Variables = /** @class */ (function () {
        function Variables() {
            this.a = 1;
            this.b = 2;
            this.c = 3;
            this.d = 4; // Also public
        }
        return Variables;
    }());
    classVariables.Variables = Variables;
    var d = new Variables();
    console.log(d.d); // prints 4
    // class MyClass {
    //   constructor(param1: number, param2: string) {
    //   }
    // }
    // const myClassInstance = new MyClass(1, "Must be present");
    var MyClass = /** @class */ (function () {
        function MyClass(param1, param2) {
            this.m1 = param1;
            this.m2 = param2;
            this.m3 = 123;
        }
        return MyClass;
    }());
    var myClassInstance = new MyClass(1, "Must be present");
    console.log(myClassInstance); // prints MyClass { m1: 1, m2: 'Must be present', m3: 123 }
    var ClassWithConstructorOverloaded = /** @class */ (function () {
        // constructor(p1: number);
        function ClassWithConstructorOverloaded(p1, p2) {
            this.p1 = p1;
            if (p2 === undefined) {
                p2 = "default";
            }
            this.p2 = p2;
        }
        return ClassWithConstructorOverloaded;
    }());
    var overloaded1 = new ClassWithConstructorOverloaded(1);
    var overloaded2 = new ClassWithConstructorOverloaded(1, "hello");
    console.log(overloaded1); // prints ClassWithConstructorOverloaded { p1: 1 }
    console.log(overloaded2); // prints ClassWithConstructorOverloaded { p1: 1, p2: 'hello' }
    var MyClass2 = /** @class */ (function (_super) {
        __extends(MyClass2, _super);
        function MyClass2(p1) {
            return _super.call(this, p1, "Here") || this;
        }
        return MyClass2;
    }(MyClass));
    var myClass2 = new MyClass2(1);
    console.log(myClass2); // prints MyClass2 { m1: 1, m2: 'Here', m3: 123 }
    // Using above class variable d to show case encapsulation example
    // d.b = 100; // Not allowed, won’t compile
    // console.log(d.b); // Not allowed, won’t compile
    var BaseClass = /** @class */ (function () {
        function BaseClass() {
            this.a = 1;
            this.b = 2;
            this.c = 3;
        }
        return BaseClass;
    }());
    var ChildClass = /** @class */ (function (_super) {
        __extends(ChildClass, _super);
        function ChildClass() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.d = 1;
            _this.e = 2;
            _this.f = 3;
            return _this;
        }
        ChildClass.prototype.f1 = function () {
            // super.a;
            // super.c;
            this.a;
            this.c;
        };
        return ChildClass;
    }(BaseClass));
    var child = new ChildClass();
    console.log(child.a); // prints 1 
    console.log(child.d); // prints 1
    var MyClass3 = /** @class */ (function () {
        function MyClass3(p1, p2) {
            this.p1 = p1;
            this.p2 = p2;
        }
        return MyClass3;
    }());
    var myClass3 = new MyClass3(1, "2");
    console.log(myClass3.p2); // prints 2 
    var MyClass3Same = /** @class */ (function () {
        function MyClass3Same(p1, p2) {
            this.p1 = p1;
            this.p2 = p2;
        }
        return MyClass3Same;
    }());
    var myClass3Same = new MyClass3Same(1, "2");
    console.log(myClass3Same.p2); // prints 2
    var PrivateConstructor = /** @class */ (function () {
        function PrivateConstructor() {
        }
        return PrivateConstructor;
    }());
    // const pc = new PrivateConstructor(); // Does not compile
    var SingletonClass = /** @class */ (function () {
        function SingletonClass() {
            SingletonClass.instance = new SingletonClass();
        }
        SingletonClass.GetInstance = function () {
            return SingletonClass.instance;
        };
        return SingletonClass;
    }());
    var singletonClass = SingletonClass.GetInstance();
    var ajax;
    var funct1 = function () { };
    ajax.then(function (response) {
        var r = response;
        r.funct1 = funct1;
        return r;
    });
    var ObjectDefinitionClass = /** @class */ (function () {
        function ObjectDefinitionClass(param1) {
            this.m1 = param1;
        }
        ObjectDefinitionClass.prototype.funct1 = function () { };
        return ObjectDefinitionClass;
    }());
    ajax.then(function (response) {
        var r = response;
        return new ObjectDefinitionClass(r.m1);
    });
    var ObjectDefinitionClass2 = /** @class */ (function () {
        function ObjectDefinitionClass2(param1) {
            this.m1 = param1.m1;
        }
        ObjectDefinitionClass2.prototype.funct1 = function () { };
        return ObjectDefinitionClass2;
    }());
    ajax.then(function (response) {
        var r = response;
        return new ObjectDefinitionClass2(r);
    });
    function createObj(m1) {
        return {
            m1: m1,
            funct1: function () { }
        };
    }
    ajax.then(function (response) {
        var r = response;
        return createObj(r.m1);
    });
    var forTesting = new ObjectDefinitionClass("1");
    forTesting.funct1 = jest.fn();
})(classVariables || (classVariables = {}));
