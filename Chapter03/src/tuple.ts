namespace Tuple {

    let tuple1 = ["First name", "Last Name", 1980]; // Infered as (string |number)[]
    tuple1[2] = "Not a number";
    let tuple2: [string, string, number] = ["First name", "Last Name", 1980]; // Tuple
    // tuple2[2] = "Not a number"; // Does not compile

    let tuple3: [string, string, number]
    // tuple3 = ["Only One"]; // Does not compile
    // tuple3 = ["One", "Two", 3, "four"]; // Does not compile
    // tuple3[5] = "12"; // Compile

    // tuple3[5] = "12"; // Compile, do not mind the type
    // tuple3[1]= 2; // Does not compile, require to be a string

    function restFunction(...args: [number, string, boolean]): void {
        const p1: number = args[0];
        const p2: string = args[1];
        const p3: boolean = args[2];
        // Code
    }

    function resultFunction(p1: number, p2: string, p3: boolean): void {
        // Code
    }

    let tuple4: [number, string, boolean] = [0, "one", false];
    let array4: (number | string | boolean)[] = [0, "one", false];

    restFunction(...tuple4);
    // restFunction(...array4); // Doesn't compile
    restFunction(tuple4[0], tuple4[1], tuple4[2]);
    // restFunction(array4[0],array4[1],array4[2]); // Does not compile

    // let tuple5: [number, string?, boolean?];
    // tuple5 = [1];
    // tuple5 = [1, "two"];
    // tuple5 = [1, "two", false];

    // console.log(tuple5); // prints [1, "two", false] 

    let tuple5: [number, (string | undefined)?, (boolean | undefined)?]

    type MyTuple = [number, string];
    let tuple6: MyTuple = [1, "Test"];
    console.log(tuple6); // prints [1, "Test"]
}