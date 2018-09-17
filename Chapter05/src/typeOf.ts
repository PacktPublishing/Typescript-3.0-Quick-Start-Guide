namespace primitiveTypeOf {
	const a = "test";
	let b: number = 2;
	const c: boolean = true;
	let d: number | string = "test";
	console.log(typeof a); // string
	console.log(typeof b); // number
	console.log(typeof c); // boolean
	console.log(typeof d); // string

	const e: number | string | { complex: string, obj: number } = { complex: "c", obj: 1 };
	console.log(typeof e); // object

	let f: number = 2;
	if (typeof f === "number") {
		console.log("This is for sure a number");
	}
	type MyNewType = typeof f;

	let g: number | undefined = undefined;
	let h: number | undefined | null = null;
	console.log(typeof g); // undefined
	console.log(typeof h); // object
	console.log(g === undefined); // true
	console.log(g === null); // false
	console.log(h === undefined); // false
	console.log(h === null); // true

	function myFunction(value: number | undefined): void {
		console.log("Value is number or undefined");
		if (value === undefined) {
			console.log("Value is undefined");
		} else {
			console.log("Value is NOT undefined, hence a number");
		}
		console.log("Value is number or undefined");
	}

	myFunction(1);
	myFunction(undefined);

	function myFunction2(value: number | undefined): void {
		console.log("Value is number or undefined");
		if (value === undefined) {
			return;
		}
		console.log("Value is NOT undefined, hence a number");
	}

	myFunction2(1);
	myFunction2(undefined);
}