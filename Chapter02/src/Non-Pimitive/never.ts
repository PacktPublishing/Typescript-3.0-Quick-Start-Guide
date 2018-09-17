function returnNever(i: number): never {

	// Logic here

	if (i === 0) {
		throw Error("i is zero");
	} else {
		throw Error("i is not zero");
	}

	// Will never reach the end of the function

}

console.log(returnNever(5));

type myUnion = "a" | "b";

function elseNever(value: myUnion) {
    if (value === "a") {
        value; // type is “a”
    } else if (value === "b") {
        value; // type is “b”
    } else {
        value; // type is never
    }
}

let c: myUnion = Math.random() > 0.5 ? "a" : "b";

if (c == "a") {
    console.log("Union a");
} else {
    exhaustiveCheck(c); //”b” will fallthrough
}

function exhaustiveCheck(x: never): never {
    throw new Error("");
}