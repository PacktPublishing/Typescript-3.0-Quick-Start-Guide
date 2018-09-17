namespace guardPattern {
  interface Type1 extends Type2 {
    // kind: "Type1";
    m1: number;
  }
  interface Type2 {
    // kind: "Type2";
    m2: string;
    m3: number;
  }

  interface Type3 {
    kind: "Type3";
    m3: string;
  }
  type Type4 = Type2 & Type3;
  // const type4: Type4 = { kind: ???, m2: "1", m3: "2" }; // Does not compile

  function checkInterfaceICheck1(obj: any): obj is Type1 {
    const type1WithMaybeManyUndefinedMembers = (obj as Type1);
    return type1WithMaybeManyUndefinedMembers.m1 !== undefined
      && type1WithMaybeManyUndefinedMembers.m2 !== undefined
      && type1WithMaybeManyUndefinedMembers.m3 !== undefined
  }
  function checkInterfaceICheck2(obj: any): obj is Type2 {
    const type1WithMaybeManyUndefinedMembers = (obj as Type2);
    return type1WithMaybeManyUndefinedMembers.m2 !== undefined
      && type1WithMaybeManyUndefinedMembers.m3 !== undefined;
  }
  function codeWithUnionParameter(obj: Type1 | Type2): void {
    if (checkInterfaceICheck1(obj)) {
      console.log("Type1", obj.m1);
    }
    if (checkInterfaceICheck2(obj)) {
      console.log("Type2", obj.m2);
    }
  }

  const type1: Type1 = { m1: 1, m2: "hello-type1", m3:2 };
  const type2: Type2 = { m2: "hello-type2", m3:2 };

  codeWithUnionParameter(type1);
  codeWithUnionParameter(type2);

}