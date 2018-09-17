namespace Cast {
  let something: any = 1;
  let variable1: number;
  variable1 = <number>something;
  variable1 = something as number;

  console.log(variable1); // prints 1
  //let variable2: string = variable1 as string;

  interface Type1 {
    m1: number;
  }
  interface Type2 {
    m1: number;
    m2: string;
    m3: number;
  }

  let t1: Type1 = { m1: 123 };
  let t2: Type2 = t1 as Type2;
  console.log(t2); // prints { m1: 123 }
  console.log(t1); // prints { m1: 123 }
  let t3: Type2 = { m1: 1, m2: "2", m3: 3 };
  let t4: Type1 = t2;
  console.log(t3); // prints { m1: 1, m2: '2', m3: 3 }
  console.log(t4); // prints { m1: 123 }

  let a: number = 1;
  let b: string = "2";
  // a = b as number; // Doesn't compile
  a = b as any as number;
  console.log(a); // prints 2
}