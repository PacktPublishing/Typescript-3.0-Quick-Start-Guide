var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var Destructuring;
(function (Destructuring) {
    var obj = {
        id: 1,
        time: 100,
        name: "MyName",
        startTime: new Date(),
        stopTime: new Date(),
        category: "Cat5"
    };
    // const id = obj.id;
    // const name = obj.name;
    // const category = obj.category;
    // console.log(id); // prints 1
    // console.log(name); // prints MyName
    // console.log(category); // prints Cat5
    var id = obj.id, name = obj.name, category = obj.category, remainingMembers = __rest(obj, ["id", "name", "category"]);
    console.log(remainingMembers.startTime); // prints System date
    console.log(remainingMembers.stopTime); // prints System date
    console.log(remainingMembers.time); // prints 100
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var value1 = values[0], value2 = values[1], value3To9 = values.slice(2);
    var value_1 = values[0], value_3 = values[2], value4To9 = values.slice(3);
    console.log(value1); // prints 1
    console.log(value2); // prints 2
    console.log(value3To9); // prints [ 3, 4, 5, 6, 7, 8, 9 ]
    console.log(value_1); // prints 1
    console.log(value_3); // prints 3
    console.log(value4To9); // prints [ 4, 5, 6, 7, 8, 9 ]
})(Destructuring || (Destructuring = {}));
