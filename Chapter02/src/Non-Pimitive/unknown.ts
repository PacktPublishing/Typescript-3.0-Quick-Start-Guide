function f1(x: any): string {
    return x;
}

function f2(x: unknown): string {
    return x; // Does not compile
}