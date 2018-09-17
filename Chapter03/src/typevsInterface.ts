interface IA {
    m1: string;
}
interface IA {
    m2: string;
}
const ia: IA = { m1: "m1", m2: "m2" };
console.log(ia); // prints { m1: "m1", m2: "m2" }

type TPrimitive1 = string;
type TPrimitive2 = { m1: string };
// class ExtendPrimitiv1 implements TPrimitive1 { // Does not compile
// }
class ExtendPrimitiv2 implements TPrimitive2 { // Compile
    public m1: string = "Compile";
}

type TypeWithIndex = {
    [key: string]: string;
    m1: string;
}
const c: TypeWithIndex = {
    m1: "m1"
};
c["m2"] = "m2";

console.log(c); // prints { m1: 'm1', m2: 'm2' }