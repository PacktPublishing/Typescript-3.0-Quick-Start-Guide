let x: string = "Value1";
x = "Value2";

let y: "Literal";
y = "Literal";
// y = "sdasd"; // Won't compile

interface Book {
    type: "book";
    isbn: string;
    page: number;
}

interface Movie {
    type: "movie";
    lengthMinutes: number;
}

let hobby: Movie = { type: "movie", lengthMinutes: 120 };

function showHobby(hobby: Book | Movie): void {
    if (hobby.type === "movie") {
        console.log("Long movie of " + hobby.lengthMinutes);
    } else {
        console.log("A book of few pages: " + hobby.page);
    }
}

showHobby(hobby);
