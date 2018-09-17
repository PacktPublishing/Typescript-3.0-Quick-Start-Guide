declare type ObjLiteralType = {
    x: number;
    y: number;
};
interface ObjLiteralType2 {
    x: number;
    y: number;
}
declare function uppercaseObject(obj: Object): void;
declare function lowercaseObject(obj: object): void;
declare function anyObject(obj: any): void;
declare function objectLiteral(obj: {}): void;
declare let literalObject: ObjLiteralType;
declare let literalObject2: ObjLiteralType2;
declare let literalObject3: {
    x: number;
    y: number;
};
declare let literalObject4: {
    x: number;
    y: number;
};
