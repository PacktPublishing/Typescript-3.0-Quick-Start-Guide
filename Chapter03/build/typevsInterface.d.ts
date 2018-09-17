interface IA {
    m1: string;
}
interface IA {
    m2: string;
}
declare const ia: IA;
declare type TPrimitive1 = string;
declare type TPrimitive2 = {
    m1: string;
};
declare class ExtendPrimitiv2 implements TPrimitive2 {
    m1: string;
}
declare type TypeWithIndex = {
    [key: string]: string;
    m1: string;
};
declare const c: TypeWithIndex;
