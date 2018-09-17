namespace ReadOnlyField {
  interface I1 {
      readonly id: string;
      name: string;
  }
  let i1: I1 = {
      id: "1",
      name: "test"
  }
  // i1.id = "123"; // Does not compile

  class C1 {
      public readonly id: string = "C1";
      constructor() {
          this.id = "Still can change";
      }
      public f1(): void {
          // this.id = 1; // Doesn't compile
      }
  }

  // ---
  class C2 {
      public static readonly MY_CONST: string = "TEST";
      public CodeHere(): void {
          C2.MY_CONST;
      }
  }
}