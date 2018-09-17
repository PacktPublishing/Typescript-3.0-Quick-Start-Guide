namespace Structural {
    interface Type1 {
        m1: string;
    }
    interface Type2 {
        m1: string;
    }
    type Type3 = { m1: string };

    const v0 = { m1: "AllTheSame" };
    const v1: Type1 = v0;
    const v2: Type2 = v0;
    const v3: Type3 = v0;

    console.log(v1); // { m1: "AllTheSame" }
    console.log(v2); // { m1: "AllTheSame" }
    console.log(v3); // { m1: "AllTheSame" }

}