var castVariable;
(function (castVariable) {
    var newObject1 = { a: 1, b: "2" };
    var newObject2 = { a: 1, b: "2" };
    var newObject3 = { a: 1, b: "2", c: "OH NO" };
    var newObject4 = { a: 1 };
    console.log(newObject1); // prints { a: 1, b: "2" }
    console.log(newObject2); // prints { a: 1, b: "2" } 
    console.log(newObject3); // prints { a: 1, b: "2", c: "OH NO" }
    console.log(newObject4); // prints { a: 1 }
})(castVariable || (castVariable = {}));
