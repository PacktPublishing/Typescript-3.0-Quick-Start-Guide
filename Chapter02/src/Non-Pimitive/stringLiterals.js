var x = "Value1";
x = "Value2";
var y;
y = "Literal";
var hobby = { type: "movie", lengthMinutes: 120 };
function showHobby(hobby) {
    if (hobby.type === "movie") {
        console.log("Long movie of " + hobby.lengthMinutes);
    }
    else {
        console.log("A book of few pages: " + hobby.page);
    }
}
showHobby(hobby);
