"use strict";
function letFunction() {
    let a = 1;
    { // Scope start
        let a = 2;
    } // Scope end
    console.log(a); // 1
    if (true) { // Scope start
        let a = 3;
    } // Scope end
    console.log(a); // 1
}
letFunction();
function switchFunction(num) {
    let b = "functionb";
    console.log(b); // prints functionb
    switch (num) {
        case 1: {
            let b = "case 1";
            console.log(b); // prints case 1
            break;
        } // After break
        case 2:
            {
                let b = "case 2";
                console.log(b); // prints case 2
            } // Before break
            break;
    }
}
switchFunction(1);
switchFunction(2);
//# sourceMappingURL=letDeclaration.js.map