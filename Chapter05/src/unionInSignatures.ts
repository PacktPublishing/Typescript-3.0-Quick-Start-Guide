namespace union {
  // function f(p: number | string): boolean | Date {
  //   if (typeof p === "number") {
  //     return true;
  //   }
  //   return new Date();
  // }
  // const r1: boolean = f(1); // Does not compile
  // const r2: Date = f("string"); // Does not compile

  function f(p: number): boolean;
  function f(p: string): Date;
  function f(p: number | string): boolean | Date {
    if (typeof p === "number") {
      return true;
    }
    return new Date();
  }
  const r1: boolean = f(1);
  const r2: Date = f("string");
  console.log(r1); // prints true
  console.log(r2); // prints 2018-08-25T07:39:38.142Z

  // function g(p: number, q: number): boolean;
  // function g(p: string, q: string): Date;
  // function g(p: number | string, q: number | string): void {
  // }
  // g(1, "123"); // Doesn't compile
  // g(1, 2);
  // g("1", "2");
}