namespace classVariables {
  export class Variables {
    public a: number = 1;
    private b: number = 2;
    protected c: number = 3;
    d: number = 4; // Also public
  }

  const d = new Variables();
  console.log(d.d); // prints 4

  // class MyClass {
  //   constructor(param1: number, param2: string) {
  //   }
  // }
  // const myClassInstance = new MyClass(1, "Must be present");

  class MyClass {
    private m1: number;
    private m2: string;
    private m3: number;
    constructor(param1: number, param2: string) {
      this.m1 = param1;
      this.m2 = param2;
      this.m3 = 123;
    }
  }

  const myClassInstance = new MyClass(1, "Must be present");
  console.log(myClassInstance); // prints MyClass { m1: 1, m2: 'Must be present', m3: 123 }

  class ClassWithConstructorOverloaded {
    private p1: number;
    private p2: string;
    // constructor(p1: number);
    constructor(p1: number, p2?: string) {
      this.p1 = p1;
      if (p2 === undefined) {
        p2 = "default";
      }
      this.p2 = p2;
    }
  }

  const overloaded1 = new ClassWithConstructorOverloaded(1);
  const overloaded2 = new ClassWithConstructorOverloaded(1, "hello");

  console.log(overloaded1); // prints ClassWithConstructorOverloaded { p1: 1 }
  console.log(overloaded2); // prints ClassWithConstructorOverloaded { p1: 1, p2: 'hello' }

  class MyClass2 extends MyClass {
    constructor(p1: number) {
      super(p1, "Here");
    }
  }

  const myClass2 = new MyClass2(1);
  console.log(myClass2); // prints MyClass2 { m1: 1, m2: 'Here', m3: 123 }

  // Using above class variable d to show case encapsulation example
  // d.b = 100; // Not allowed, won’t compile
  // console.log(d.b); // Not allowed, won’t compile

  class BaseClass {
    public a: number = 1;
    private b: number = 2;
    protected c: number = 3;
  }
  class ChildClass extends BaseClass {
    public d: number = 1;
    private e: number = 2;
    protected f: number = 3;
    public f1() {
      // super.a;
      // super.c;
      this.a;
      this.c;
    }
  }
  const child = new ChildClass();
  console.log(child.a); // prints 1 
  console.log(child.d); // prints 1

  class MyClass3 {
    public constructor(private p1: number, public p2: string) { }
  }
  const myClass3 = new MyClass3(1, "2");
  console.log(myClass3.p2); // prints 2 

  class MyClass3Same {
    private p1: number;
    public p2: string;
    public constructor(p1: number, p2: string) {
      this.p1 = p1;
      this.p2 = p2;
    }
  }

  const myClass3Same = new MyClass3Same(1, "2");
  console.log(myClass3Same.p2); // prints 2

  class PrivateConstructor {
    private constructor() {
    }
  }
  // const pc = new PrivateConstructor(); // Does not compile

  class SingletonClass {
    private static instance: SingletonClass;
    private constructor() {
      SingletonClass.instance = new SingletonClass();
    }
    public static GetInstance(): SingletonClass {
      return SingletonClass.instance;
    }
  }
  const singletonClass = SingletonClass.GetInstance();

  interface ObjectDefinition {
    m1: string;
    funct1: () => void;
  }
  let ajax: any;
  const funct1 = () => { };
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    r.funct1 = funct1;
    return r;
  });

  class ObjectDefinitionClass implements ObjectDefinition {
    public m1: string;
    public funct1(): void { }
    constructor(param1: string) {
      this.m1 = param1;
    }
  }
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    return new ObjectDefinitionClass(r.m1);
  });

  interface Model {
    m1: string;
  }
  interface Funct {
    funct1: () => void;
  }
  class ObjectDefinitionClass2 implements Model, Funct {
    public m1: string;
    public funct1(): void { }
    constructor(param1: Model) {
      this.m1 = param1.m1;
    }
  }
  ajax.then((response: any) => {
    const r = response as Model;
    return new ObjectDefinitionClass2(r);
  });


  function createObj(m1: string): ObjectDefinitionClass {
    return {
      m1: m1,
      funct1: () => { }
    }
  }
  ajax.then((response: any) => {
    const r = response as Model;
    return createObj(r.m1);
  });

  const forTesting = new ObjectDefinitionClass("1");
  forTesting.funct1 = jest.fn();
}