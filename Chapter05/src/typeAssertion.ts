namespace TypeAssertion {
	interface T1 {
		myNumber: number | undefined;
	}
	interface T2 {
		t1: T1 | undefined;
	}
	interface T3 {
		t2: T2 | undefined;
	}
	const myObject: T3 | undefined = {
		t2: {
			t1: {
				myNumber: 1
			}
		}
	}
	if (myObject !== undefined) {
		if (myObject.t2 !== undefined) {
			if (myObject.t2.t1 !== undefined) {
				if (myObject.t2.t1.myNumber !== undefined) {
					console.log("My number is :", myObject.t2.t1.myNumber); // prints My number is : 1
				}
			}
		}
	}
	console.log("My number is :", myObject!.t2!.t1!.myNumber); // prints My number is : 1

	class LateInitialization {
		m1!: number; // Not initialized (use type assertion)
		constructor() {
			// No initializing here
			this.m1 + 1;
		}
		public init(): void {
			this.m1 = 1;
		}
	}

	let var1: string | undefined;
	var1 = ((): string | undefined => "Not undefined but type is still both")();
	console.log(var1!.substr(0, 5)); // prints Not U
}