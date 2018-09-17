namespace compareClasses2 {
  class B1 {
    private name: string = "b1";
    public baseFunct(): void { }
  }
  class C1 extends B1 {
    public a: number = 1;
    public funct(): void { }

  }
  class C2 {
    private name: string = "c2";
    public a: number = 1;
    public funct(): void { }
    public baseFunct(): void { }
  }
  const c1: B1 = new C1();
  const c2: B1 = new C2(); // Does not compile 
}