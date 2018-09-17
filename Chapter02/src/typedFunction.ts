function funct1(param1: number): string { return ""; }
console.log(funct1(1)); // prints empty string

function funct2(param1: boolean, param2: string): void { }
function funct3(param1: boolean | string): void { }
function funct4(): string | number | boolean { return ""; }

function funct5(param1: boolean): string;
function funct5(param1: Date): number;
function funct5(param1: boolean | Date): string | number {
  if (typeof param1 === "boolean") {
    return param1 ? "Yes" : "No";
  } else {
    return 0;
  }
}

const expectedString: string = funct5(true);
const expectedNumber: number = funct5(new Date());
console.log(expectedString); // prints Yes
console.log(expectedNumber); // prints 0

function returnAnAnonymousFunction(): () => number {
  return () => 1;
}

function returnAnAnonymousFunction2(): Function {
  return function () { return 1 };
}

console.log(returnAnAnonymousFunction());
console.log(returnAnAnonymousFunction2());

const variable = (message: string) => message + " world";
const variable2 = (message: string) => { return message + " world" };
const variable3 = function (message: string) { return message + " world" };

console.log(variable("Hello")); // prints Hello world
console.log(variable2("Hello")); // prints Hello world
console.log(variable3("Hello")); // prints Hello world

function functWithOptional(param1?: boolean): void { }
console.log(functWithOptional()); // prints undefined, as the function return void
console.log(functWithOptional(undefined)); // prints undefined, as the function return void 
console.log(functWithOptional(true)); // prints undefined, as the function return void

function functWithUndefined(param1: boolean | undefined): void { }
console.log(functWithUndefined(true)); // prints undefined as function returns void
console.log(functWithUndefined(undefined)); // prints undefined, as the function return void

//function functWithOptional2(param1?: boolean, param2: string): void { } // Doesn't compile
function functWithOptional3(param1?: boolean, param2?: string): void { }

class ClassFullOfFunctions {
  public f1() { }
  private f2(p1: number): string { return ""; }
  protected f3(): void { }
  f4(): boolean { return true; }
}

const object = new ClassFullOfFunctions();
console.log(object.f1()); // prints undefined
// console.log(object.f2(1)); // Doesn't compile because function in the class is private.  
// console.log(object.f3()); // Doesn't compile because function in the class is protected.  
console.log(object.f4()); // prints true

class ClassWithVariableFunctions {
  private long: (p1: number) => string = (p1: number) => { return ""; }
  private short: (p1: number) => string = (p1) => "";
  private tiny = (p1: number) => "";
}




