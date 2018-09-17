declare function myGlobalFunction(p1: string): string;

let var1: string = myGlobalFunction("test");

interface myGlobalType {
    name: string;
}

let var2: myGlobalType = { name: "test" };

declare namespace myScope {
    let var1: number;
    class MyClass {
    }
    interface MyObject {
        x: number;
    }
    type data = string;
    function myFunction(): any;
}


let x: number = myScope.var1;
let y: myScope.MyClass = new myScope.MyClass();

let s: myScope.MyObject = { x: 5 };
var something: myScope.data = "test";
myScope.myFunction();
