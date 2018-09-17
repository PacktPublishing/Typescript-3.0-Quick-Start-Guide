namespace manyType {
    type MyType = "a" | "b" | "c";
    const m1: MyType = "a";
    // const m2: MyType = "no"; // Doesn’t compile

    type AcceptedOption = number | string | {
        option1: string, option2: number
    };
    const myOption1: AcceptedOption = "run";
    const myOption2: AcceptedOption = 123;
    const myOption3: AcceptedOption = { option1: "run", option2: 123 };

    console.log(myOption1); // prints run
    console.log(myOption2); // prints 123
    console.log(myOption3); // prints { option1: "run", option2: 123 }

    function functWithUnion(p: boolean | undefined): undefined | null {
        return undefined;
    }

    console.log(functWithUnion(true)); // prints undefined
    console.log(functWithUnion(undefined)); // prints undefined

    interface TypeA {
        a: string;
        b: string;
    }
    interface TypeB {
        b: string;
        c: string;
    }

    function functionWithUnion(param1: TypeA | TypeB): void {
        console.log(param1.b);
    }

    const typeA: TypeA = { a: "hi", b: "hello" };
    const typeB: TypeB = { b: "world", c: "universe" };
    functionWithUnion(typeA); // prints hello 
    functionWithUnion(typeB); // prints world
}

