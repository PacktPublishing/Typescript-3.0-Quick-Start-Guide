namespace staticNamespace {
  abstract class FakeStaticClass {
    public static m1: number;
    public static f1(): void { }
  }
  console.log(FakeStaticClass.m1); // prints undefined
  FakeStaticClass.f1();
  // const instance1 = new FakeStaticClass(); // Doesn't compile

  // class StaticClass {
  //   public static ps: number;
  //   private static privateStatic: number;
  //   protected static protecStatic: number;
  // }
  // StaticClass.ps = 1;
  // console.log(StaticClass.ps); // prints 1

  class StaticClass {
    public static ps: number;
    private static privateStatic: number;
    protected static protecStatic: number;
    public nonStaticFunction(): void {
      StaticClass.ps;
      StaticClass.privateStatic;
      StaticClass.protecStatic;
    }
  }
}