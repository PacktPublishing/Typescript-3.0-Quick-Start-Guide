namespace castVariable {
    interface MyObject {
        a: number;
        b: string;
    }

    const newObject1: MyObject = { a: 1, b: "2" };
    const newObject2 = { a: 1, b: "2" } as MyObject;
    const newObject3 = { a: 1, b: "2", c: "OH NO" } as MyObject;
    const newObject4 = { a: 1 } as MyObject;

    console.log(newObject1); // prints { a: 1, b: "2" }
    console.log(newObject2); // prints { a: 1, b: "2" } 
    console.log(newObject3); // prints { a: 1, b: "2", c: "OH NO" }
    console.log(newObject4); // prints { a: 1 }
}