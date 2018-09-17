function letFunction() {
    var a = 1;
    { // Scope start
        var a_1 = 2;
    } // Scope end
    console.log(a); // 1
    if (true) { // Scope start
        var a_2 = 3;
    } // Scope end
    console.log(a); // 1
}
letFunction();
function switchFunction(num) {
    var b = "functionb";
    console.log(b); // prints functionb
    switch (num) {
        case 1: {
            var b_1 = "case 1";
            console.log(b_1); // prints case 1
            break;
        } // After break
        case 2:
            {
                var b_2 = "case 2";
                console.log(b_2); // prints case 2
            } // Before break
            break;
    }
}
switchFunction(1);
switchFunction(2);
