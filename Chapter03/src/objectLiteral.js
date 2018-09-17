function uppercaseObject(obj) { }
function lowercaseObject(obj) { }
function anyObject(obj) { }
function objectLiteral(obj) { }
uppercaseObject({ x: 1 });
lowercaseObject({ x: 1 });
anyObject({ x: 1 });
objectLiteral({ x: 1 });
var literalObject = { x: 1, y: 2 };
var literalObject2 = { x: 1, y: 2 };
var literalObject3 = { x: 1, y: 2 };
var literalObject4 = { x: 1, y: 2 };
literalObject = literalObject2 = literalObject3 = literalObject4;
console.log(literalObject); // prints { x: 1, y: 2 } 
