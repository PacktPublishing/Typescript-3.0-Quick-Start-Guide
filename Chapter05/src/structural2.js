var Structural2;
(function (Structural2) {
    var v0 = { kind: "Type1", m1: "AllTheSame" };
    // const v1: Type1 = v0;
    // const v2: Type2 = v0;
    // const v3: Type3 = v0;
    function threeLogic(param) {
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
    var type1 = { kind: "Type1", m1: "Type-1" };
    var type2 = { kind: "Type2", m1: "Type-2" };
    var type3 = { kind: "Type3", m1: "Type-3" };
    threeLogic(type1); // prints Type-1
    threeLogic(type2); // prints Type-2
    threeLogic(type3); // prints Type-3
    function AlphaBeta(param) {
        switch (param.kind) {
            case "Alpha":
                console.log(param.alpha);
                break;
            case "Beta":
                console.log(param.beta);
                break;
        }
    }
    var alpha = { kind: "Alpha", alpha: "Type-Alpha" };
    var beta = { kind: "Beta", beta: "Type-Beta" };
    AlphaBeta(alpha); // prints Type-Alpha
    AlphaBeta(beta); // prints Type-Beta
})(Structural2 || (Structural2 = {}));
