"use strict";
var classVariables;
(function (classVariables) {
    class Variables {
        constructor() {
            this.a = 1;
            this.b = 2;
            this.c = 3;
            this.d = 4; // Also public
        }
    }
    classVariables.Variables = Variables;
    const d = new Variables();
    console.log(d.d); // prints 4
    // class MyClass {
    //   constructor(param1: number, param2: string) {
    //   }
    // }
    // const myClassInstance = new MyClass(1, "Must be present");
    class MyClass {
        constructor(param1, param2) {
            this.m1 = param1;
            this.m2 = param2;
            this.m3 = 123;
        }
    }
    const myClassInstance = new MyClass(1, "Must be present");
    console.log(myClassInstance); // prints MyClass { m1: 1, m2: 'Must be present', m3: 123 }
    class ClassWithConstructorOverloaded {
        constructor(p1, p2) {
            this.p1 = p1;
            if (p2 === undefined) {
                p2 = "default";
            }
            this.p2 = p2;
        }
    }
    classVariables.ClassWithConstructorOverloaded = ClassWithConstructorOverloaded;
    const overloaded2 = new ClassWithConstructorOverloaded(1, "hello");
    console.log(overloaded2); // prints ClassWithConstructorOverloaded { p1: 1, p2: 'hello' }
})(classVariables || (classVariables = {}));
//# sourceMappingURL=classVariables.js.map