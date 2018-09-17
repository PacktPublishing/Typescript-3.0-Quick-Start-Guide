var guardPattern;
(function (guardPattern) {
    // const type4: Type4 = { kind: ???, m2: "1", m3: "2" }; // Does not compile
    function checkInterfaceICheck1(obj) {
        var type1WithMaybeManyUndefinedMembers = obj;
        return type1WithMaybeManyUndefinedMembers.m1 !== undefined
            && type1WithMaybeManyUndefinedMembers.m2 !== undefined
            && type1WithMaybeManyUndefinedMembers.m3 !== undefined;
    }
    function checkInterfaceICheck2(obj) {
        var type1WithMaybeManyUndefinedMembers = obj;
        return type1WithMaybeManyUndefinedMembers.m2 !== undefined
            && type1WithMaybeManyUndefinedMembers.m3 !== undefined;
    }
    function codeWithUnionParameter(obj) {
        if (checkInterfaceICheck1(obj)) {
            console.log("Type1", obj.m1);
        }
        if (checkInterfaceICheck2(obj)) {
            console.log("Type2", obj.m2);
        }
    }
    var type1 = { m1: 1, m2: "hello-type1", m3: 2 };
    var type2 = { m2: "hello-type2", m3: 2 };
    codeWithUnionParameter(type1);
    codeWithUnionParameter(type2);
})(guardPattern || (guardPattern = {}));
