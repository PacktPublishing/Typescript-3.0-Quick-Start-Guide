interface TypeA {
    a: string;
    b: string;
}
interface TypeB {
    b: string;
    c: string;
}
declare type TypeC = TypeA & TypeB;
declare const m: TypeC;
declare function intersectGeneric<TT1>(t1: TT1): TT1 & TypeA;
declare const result: {
    c: string;
} & TypeA;
declare type TypeD1 = TypeA & TypeB;
declare type TypeD2 = TypeB & TypeA;
declare let d1: TypeD1;
declare let d2: TypeD2;
declare type TypeD3 = (TypeA & TypeB) | (TypeB & TypeA);
declare type TypeD4 = TypeA & TypeB | TypeB & TypeA;
declare type TypeD5 = (TypeA & TypeB);
declare type TypeD6 = TypeA & TypeB;
declare let d3: TypeD3;
declare let d4: TypeD4;
declare let d5: TypeD5;
declare let d6: TypeD6;
interface InterfaceA {
    m1: string;
}
interface InterfaceB {
    m2: string;
}
interface InterfaceMergeAB extends InterfaceA, InterfaceB {
    m3: string;
}
declare type TypeAB = InterfaceA & InterfaceB;
declare class ClassA {
    m1: string;
}
declare class ClassB {
    m2: string;
}
declare type ClassAb = ClassA & ClassB;
declare const classAb: ClassAb;
interface InterfaceSameField1 {
    m1: string;
}
interface InterfaceSameField2 {
    m1?: string;
}
declare type Same = InterfaceSameField1 & InterfaceSameField2;
declare let same: Same;
interface InterfaceA {
    m1: string;
}
interface InterfaceB {
    m2: string;
}
interface InterfaceMergeAB extends InterfaceA, InterfaceB {
    m3: string;
}
