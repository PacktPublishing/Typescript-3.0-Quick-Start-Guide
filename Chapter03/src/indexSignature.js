var indexSignature;
(function (indexSignature) {
    var c = {
        "test": "compile",
        123: "compile too"
    };
    console.log(c[123]); // compile too
    var obj = {
        name: "My Name",
        count: 123
    };
    // console.log(obj["doesNotExist"]); // Does not compile
    console.log(obj["name"]); // Compile
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
    var obj3 = {
        name: "My Name",
        count: 123,
        when: new Date(),
        12: "string only" // Good if number->string
    };
    console.log(obj3[12]); // prints stirng only
    var map = new Map([["key1", "value1"], ["key2", "value2"]]);
    var value1 = map.get("key1");
    var value2 = map.get("key3");
    console.log(value1); // prints value1
    console.log(value2); // prints undefined 
    var map2 = new Map(); // Key any, value any
    var map3 = new Map(); // Key string, value number
    // let map4 = new Map([[1, "value1"], ["key2", "value2"]]); // Does't compile
    map.set("key3", "value3");
    map.has("key1");
    map["delete"]("key1"); // Similar to delete obj.key1 (index signature)
    console.log(map.get("key3")); // prints value3
    console.log(map.get("key1")); // prints undefined
})(indexSignature || (indexSignature = {}));
