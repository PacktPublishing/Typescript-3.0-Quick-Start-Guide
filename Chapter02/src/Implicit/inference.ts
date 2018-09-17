namespace inference {
	const x = 1;
	let y = 1;
	let z;
	// const d; // Does not compile
	z = 1;

	const d1 = new Date();
	let d2 = new Date();
	// d1 = ''; // Doesn't compile 

	const b1 = true;
	let b2 = false;
	// b2 = ''; // Doesn't compile

	const c1 = {
		m1: 1
	};

	let c2 = {
		m1: 1
	};

	function f1(a) {
		return a;
	}
	function f2(a: number) {
		return a;
	}
	function f3() {
		if (true) {
			return 1;
		} else {
			return "1";
		}
	}

	console.log(f1(1)); // prints 1
	// console.log(f2('')); // Doesn't compile  
	console.log(f3()); // prints 1
}