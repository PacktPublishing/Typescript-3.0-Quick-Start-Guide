namespace objectObjectVariable {
	class MyClass {};
	
	let bigObject: Object;
	bigObject = 1;
	bigObject = "1";
	bigObject = true;
	// bigObject = Symbol("123");
	bigObject = { a: "test" };
	bigObject = () => { };
	bigObject = [1, 2, 3];
	bigObject = new Date();
	bigObject = new MyClass();
	bigObject = Object.create({});

	let littleObject: object;
	littleObject = { a: "test" };
	littleObject = new Date();
	littleObject = () => { };
	littleObject = [1, 2, 3];
	littleObject = new MyClass();
	littleObject = Object.create({});

	let acceptNull: number | null = null;
	acceptNull = 1;

	// let acceptUndefined: number | undefined = 1;
	// acceptUndefined = null;

	let obj1: Object = {};
  let obj2: object = {};
  let obj3: {} = {};
  let obj4: any = {};
	
	// obj1.test = "2"; // Does not compile
  // obj2.test = "2"; // Does not compile
  // obj3.test = "2"; // Does not compile
  obj4.test = "2";
	 
	obj1.toString();
  obj2.toString();
  obj3.toString();
	obj4.toString();
	
	console.log(obj4); // pronts { test: '2' }
}

