type ObjLiteralType = { x: number, y: number };
interface ObjLiteralType2 {
    x: number;
    y: number;
}

function uppercaseObject(obj: Object): void { }
function lowercaseObject(obj: object): void { }
function anyObject(obj: any): void { }
function objectLiteral(obj: {}): void { }

uppercaseObject({ x: 1 });
lowercaseObject({ x: 1 });
anyObject({ x: 1 });
objectLiteral({ x: 1 });

let literalObject: ObjLiteralType = { x: 1, y: 2 };
let literalObject2: ObjLiteralType2 = { x: 1, y: 2 };
let literalObject3: { x: number, y: number } = { x: 1, y: 2 };
let literalObject4 = { x: 1, y: 2 }; 

literalObject = literalObject2 = literalObject3 = literalObject4;
console.log(literalObject); // prints { x: 1, y: 2 } 