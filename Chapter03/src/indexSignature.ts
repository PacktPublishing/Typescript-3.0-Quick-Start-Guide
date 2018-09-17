namespace indexSignature {
	interface Person {
		[id: string]: string;
	}

	const c: Person = {
		"test": "compile",
		123: "compile too"
	};

	console.log(c[123]); // compile too

	interface NotAPerson {
		[id: number]: string;
	}

	// Does not compile
	// const c2: NotAPerson = {
	//	"test": "compile",
	//	123: "compile too"
	// };

	interface NotIndexSignatureObject {
		name: string;
		count: number;
	}
	const obj: NotIndexSignatureObject = {
		name: "My Name",
		count: 123
	};
	// console.log(obj["doesNotExist"]); // Does not compile
	console.log(obj["name"]); // Compile

	// Does not compile
	// interface ObjWithMembersAndIndexSignature {
	// 	name: string;
	// 	count: number;
	// 	when: Date;
	// 	[id: string]: string;
	// }

	// Does compile
	interface ObjWithMembersAndIndexSignature {
		name: string;
		count: number;
		when: Date;
		[id: number]: string;
	}

	// interface ObjWithMembersAndIndexSignature2 {
	// 	name: string;
	// 	count: number;
	// 	when: Date;
	// 	obj: { s: string }; // DOES NOT COMPILE
	// 	[id: number]: string;
	// }

	// const obj2: ObjWithMembersAndIndexSignature = {
	// 	name: "My Name",
	// 	count: 123,
	// 	when: new Date(),
	// 	"more": "nooo" // DOES NOT COMPILE
	// };

	const obj3: ObjWithMembersAndIndexSignature = {
		name: "My Name",
		count: 123,
		when: new Date(),
		12: "string only" // Good if number->string
	};
	console.log(obj3[12]); // prints stirng only

	interface ObjWithMembersAndIndexSignature2 {
		name: string;
		count: number;
		when: Date;
		[id: string]: string | number | Date;
	}

	interface MyMap<T> {
		[index: string]: T;
	}
	interface YourBusinessLogicObject {
		oneProps: string;
		secondProps: number;
		thirdProps: Date;
		yourDictionary: MyMap<string>;
	}

	let map = new Map([["key1", "value1"], ["key2", "value2"]]);
	let value1: string | undefined = map.get("key1");
	let value2: string | undefined = map.get("key3");
	console.log(value1); // prints value1
	console.log(value2); // prints undefined 

	let map2 = new Map(); // Key any, value any
	let map3 = new Map<string, number>(); // Key string, value number

	// let map4 = new Map([[1, "value1"], ["key2", "value2"]]); // Does't compile

	map.set("key3", "value3");
	map.has("key1");
	map.delete("key1"); // Similar to delete obj.key1 (index signature)

	console.log(map.get("key3")); // prints value3
	console.log(map.get("key1")); // prints undefined
}