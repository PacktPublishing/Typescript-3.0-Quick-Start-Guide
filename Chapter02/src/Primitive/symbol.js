var s100 = Symbol("same");
var s101 = Symbol("same");
if (s100 === s101) {
    console.log("Same"); // Won't print
}
