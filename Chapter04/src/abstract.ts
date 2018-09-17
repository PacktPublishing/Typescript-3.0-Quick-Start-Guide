namespace abstractPattern {
  abstract class MainClass {
    public mainCoreLogic(): void {
      // Code here [A]
      this.delegatedLogic();
      // Code here [B]
    }
    public abstract delegatedLogic(): void;
  }
  class CustomLogic extends MainClass {
    public delegatedLogic(): void {
      // Do some custom logic here [C]
    }
  }
  const c: MainClass = new CustomLogic();
  c.mainCoreLogic();

  abstract class Calculus {

    public isAboveZero(a: number, b: number): boolean {
      const positiveA = Math.abs(a);
      const positiveB = Math.abs(b);
      const result = this.delegatedLogic(positiveA, positiveB);
      return result > 0;
    }
    public abstract delegatedLogic(a: number, b: number): number;
  }
  class AddLogic extends Calculus {
    public delegatedLogic(a: number, b: number): number {
      return a * b;
    }
  }
  const multi: Calculus = new AddLogic();
  const boolean = multi.isAboveZero(1, 2);
  console.log(boolean); // prints true

  class CalculusWithoutAbstract {
    public constructor(private delegatedLogic: (a: number, b: number) =>
      number) {
    }
    public isAboveZero(a: number, b: number): boolean {
      const positiveA = Math.abs(a);
      const positiveB = Math.abs(b);
      const result = this.delegatedLogic(positiveA, positiveB);
      return result > 0;
    }
  }
  const multi2: CalculusWithoutAbstract = new CalculusWithoutAbstract((a, b) => a * b);
  const boolean2 = multi2.isAboveZero(1, 2);
  console.log(boolean2); // prints true
}