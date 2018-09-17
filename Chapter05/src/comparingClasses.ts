namespace compareClasses {
  class C1 {
    public a: number = 1;
    public funct(): void { }
    private p: string = "p";
  }
  class C2 {
    public a: number = 1;
    public funct(): void { }
    private p: string = "p";
  }

  const c1: C1 = new C1();
  const c2: C2 = new C2();
  const c12: C1 = new C2(); // Does not compile
  function executeClass1(c1: C1): void {
    c1.funct();
  }
  executeClass1(c1);
  executeClass1(c2); // Does not compile
  executeClass1(c12);
}