var dictionaryVariables;
(function (dictionaryVariables) {
    var p = {};
    p["id-1"] = "Name1";
    p["string-2"] = "Name12";
    console.log(p["string-2"]); // Name12
})(dictionaryVariables || (dictionaryVariables = {}));
