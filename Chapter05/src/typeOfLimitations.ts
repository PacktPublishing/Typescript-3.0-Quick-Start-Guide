namespace typeOfLimitations {
  class MyClass1 {
    member1: string = "default";
    member2: number = 123;
  }
  class MyClass2 {
    member1: string = "default";
    member2: number = 123;
  }
  const a = new MyClass1();
  const b = new MyClass2();
  if (a instanceof MyClass1) {
    console.log("a === MyClass1");
  }
  if (b instanceof MyClass2) {
    console.log("b === MyClass2");
  }

  // type MyType = instanceOf MyClass1;

  class MyClass3 extends MyClass2 {
    member3: boolean = true;
  }
  const c = new MyClass3();
  if (c instanceof MyClass2) {
    console.log("c === MyClass2");
  }
  if (c instanceof MyClass3) {
    console.log("c === MyClass3");
  }
}