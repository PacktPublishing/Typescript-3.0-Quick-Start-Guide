namespace Structural2 {
  interface Type1 {
    kind: "Type1";
    m1: string;
  }
  interface Type2 {
    kind: "Type2";
    m1: string;
  }
  type Type3 = { kind: "Type3"; m1: string };

  const v0 = { kind: "Type1", m1: "AllTheSame" };
  // const v1: Type1 = v0;
  // const v2: Type2 = v0;
  // const v3: Type3 = v0;

  function threeLogic(param: Type1 | Type2 | Type3): void {
    switch (param.kind) {
      case "Type1":
        console.log(param.m1); // param is type Type1
        break;
      case "Type2":
        console.log(param.m1); // param is type Type2
        break;
      case "Type3":
        console.log(param.m1); // param is type Type3 
        break;
    }
  }

  const type1: Type1 = { kind: "Type1", m1: "Type-1" };
  const type2: Type2 = { kind: "Type2", m1: "Type-2" };
  const type3: Type3 = { kind: "Type3", m1: "Type-3" };
  threeLogic(type1); // prints Type-1
  threeLogic(type2); // prints Type-2
  threeLogic(type3); // prints Type-3

  interface Alpha { kind: "Alpha", alpha: string }
  interface Beta { kind: "Beta", beta: string }
  function AlphaBeta(param: Alpha | Beta): void {
    switch (param.kind) {
      case "Alpha":
        console.log(param.alpha);
        break;
      case "Beta":
        console.log(param.beta);
        break;
    }
  }

  const alpha: Alpha = { kind: "Alpha", alpha: "Type-Alpha" }
  const beta: Beta = { kind: "Beta", beta: "Type-Beta" }
  AlphaBeta(alpha); // prints Type-Alpha
  AlphaBeta(beta); // prints Type-Beta

}