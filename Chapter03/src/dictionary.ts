namespace dictionaryVariables {
    interface Person {
        [id: string]: string;
    }

    const p: Person = {};
    p["id-1"] = "Name1";
    p["string-2"] = "Name12";

    console.log(p["string-2"]); // Name12
}