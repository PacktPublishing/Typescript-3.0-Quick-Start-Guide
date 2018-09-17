namespace InterfaceUseful {
    class ClassA {
        public mainFunction(): void {
            this.subFunction1();
            this.subFunction2();
        }
        private subFunction1(): void { }
        private subFunction2(): void { }
    }

    interface IClassA {
        mainFunction(): void;
    }

    class ClassA2 implements IClassA {
        public mainFunction(): void {
            this.subFunction1();
            this.subFunction2();
        }
        public subFunction1(): void { }
        public subFunction2(): void { }
    }
    // -
    interface IElement {
        m1: string;
    }
    class E1 implements IElement { m1: string = "E1->m1"; a: number = 1; }
    class E2 implements IElement { m1: string = "E2->m1"; b: boolean = true; }
    class ClassB {
        public consume(element: IElement): void { }
    }
}