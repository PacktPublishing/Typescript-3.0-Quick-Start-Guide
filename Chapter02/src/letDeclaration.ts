function letFunction() {
    let a: number = 1;
    { // Scope start
        let a: number = 2;
    } // Scope end
    console.log(a); // 1

    if (true) { // Scope start
        let a: number = 3;
    } // Scope end
    console.log(a); // 1
}
letFunction();

function switchFunction(num: number) {
    let b: string = "functionb";
    console.log(b); // prints functionb

    switch (num) {
      case 1: {
        let b: string = "case 1";
        console.log(b); // prints case 1
      break;
      } // After break
      case 2: {
        let b: string = "case 2";
        console.log(b); // prints case 2
      } // Before break
      break;
    }
  }

 switchFunction(1);
 switchFunction(2);
