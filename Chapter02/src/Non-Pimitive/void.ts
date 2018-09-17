let a: void = undefined;
console.log(a); // prints undefined

function returnNothing():void{
    return;
}
console.log(returnNothing()); // undefined

function returnWithoutType(i: number) {
    if (i === 0) {
        return false;
    } else if (i < 0) {
        return -1;
    } else {
        return "positive";
    }
}

console.log(returnWithoutType(0)); // prints false
console.log(returnWithoutType(-1)); // prints -1
console.log(returnWithoutType(1)); // prints positive