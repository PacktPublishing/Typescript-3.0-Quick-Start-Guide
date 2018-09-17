interface TypeA {
    a: string;
    b: string;
}
interface TypeB {
    b: string;
    c: string;
}
type TypeC = TypeA & TypeB;
const m: TypeC = {
    a: "A",
    b: "B",
    c: "C",
};

console.log(m); // prints { a: 'A', b: 'B', c: 'C' }

function intersectGeneric<TT1>(t1: TT1): TT1 & TypeA {
    const x: TypeA = { a: "a", b: "b" };
    return Object.assign({}, x, t1);
}
const result = intersectGeneric({ c: "c" });
console.log(result); // { a: 'a', b: 'b', c: 'c' }

type TypeD1 = TypeA & TypeB;
type TypeD2 = TypeB & TypeA;

let d1: TypeD1 = { a: "a", b: "b", c: "c" };
let d2: TypeD2 = { a: "a", b: "b", c: "c" };
console.log(typeof d1); // prints Object
console.log(typeof d2); // prints Object
console.log(d1 === d2); // prints False
d2 = d1;
console.log(d1 === d2); // prints True

type TypeD3 = (TypeA & TypeB) | (TypeB & TypeA);
type TypeD4 = TypeA & TypeB | TypeB & TypeA;
type TypeD5 = (TypeA & TypeB);
type TypeD6 = TypeA & TypeB;
let d3: TypeD3 = { a: "a", b: "b", c: "c" };
let d4: TypeD4 = { a: "a", b: "b", c: "c" };
let d5: TypeD5 = { a: "a", b: "b", c: "c" };
let d6: TypeD6 = { a: "a", b: "b", c: "c" };

console.log(d3); // prints { a: "a", b: "b", c: "c" }
console.log(d4); // prints { a: "a", b: "b", c: "c" }
console.log(d5); // prints { a: "a", b: "b", c: "c" }
console.log(d6); // prints { a: "a", b: "b", c: "c" }

interface InterfaceA {
    m1: string;
}
interface InterfaceB {
    m2: string;
}
interface InterfaceMergeAB extends InterfaceA, InterfaceB {
    m3: string;
}
type TypeAB = InterfaceA & InterfaceB;

class ClassA {
    public m1: string = "m1";
}
class ClassB {
    public m2: string = "m1";
}

type ClassAb = ClassA & ClassB;
const classAb: ClassAb = { m1: "test", m2: "test2" };
console.log(classAb); // prints { m1: "test", m2: "test2" }

interface InterfaceSameField1 {
    m1: string;
}
interface InterfaceSameField2 {
    m1?: string;
}
type Same = InterfaceSameField1 & InterfaceSameField2;
let same: Same = { m1: "This is required" };

console.log(same); // prints { m1: "This is required" }

interface InterfaceA {
    m1: string;
}

interface InterfaceB {
    m2: string;
}
interface InterfaceMergeAB extends InterfaceA, InterfaceB {
    m3: string;
}