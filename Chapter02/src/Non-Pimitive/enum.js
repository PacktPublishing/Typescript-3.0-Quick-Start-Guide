var enumVariables;
(function (enumVariables) {
    var Weather;
    (function (Weather) {
        Weather[Weather["Sunny"] = 0] = "Sunny";
        Weather[Weather["Cloudy"] = 1] = "Cloudy";
        Weather[Weather["Rainy"] = 2] = "Rainy";
        Weather[Weather["Snowy"] = 3] = "Snowy";
    })(Weather || (Weather = {}));
    var today = Weather.Snowy;
    console.log(today);
})(enumVariables || (enumVariables = {}));
var enumVariables2;
(function (enumVariables2) {
    var Weather;
    (function (Weather) {
        Weather[Weather["Sunny"] = 100] = "Sunny";
        Weather[Weather["Cloudy"] = 101] = "Cloudy";
        Weather[Weather["Rainy"] = 102] = "Rainy";
        Weather[Weather["Snowy"] = 103] = "Snowy";
    })(Weather || (Weather = {}));
    var today = Weather.Cloudy;
    console.log(today); // prints 101
})(enumVariables2 || (enumVariables2 = {}));
var enumVariables3;
(function (enumVariables3) {
    var Weather;
    (function (Weather) {
        Weather[Weather["Sunny"] = 100] = "Sunny";
        Weather[Weather["Cloudy"] = 101] = "Cloudy";
        Weather[Weather["Rainy"] = 200] = "Rainy";
        Weather[Weather["Snowy"] = 201] = "Snowy";
    })(Weather || (Weather = {}));
    var today = Weather.Snowy;
    console.log(today); // prints 201
})(enumVariables3 || (enumVariables3 = {}));
var enumVariables4;
(function (enumVariables4) {
    var Weather;
    (function (Weather) {
        Weather["Sunny"] = "Sun";
        Weather["Cloudy"] = "Cloud";
        Weather[Weather["Rainy"] = 200] = "Rainy";
        Weather[Weather["Snowy"] = 201] = "Snowy";
    })(Weather || (Weather = {}));
    var today = Weather.Cloudy;
    var tomorrow = 200;
    console.log("Today value", today); // Today value Cloud
    // console.log("Today key", Weather[today]); // Today key undefined
    console.log("Tommorow value", tomorrow); // Tommorow value 200
    console.log("Tommorow key", Weather[tomorrow]); // Tommorow key Rainy
})(enumVariables4 || (enumVariables4 = {}));
var enumVariable5;
(function (enumVariable5) {
    var Weather;
    (function (Weather) {
        Weather[Weather["Sunny"] = 0] = "Sunny";
        Weather[Weather["Cloudy"] = 1] = "Cloudy";
        Weather[Weather["Rainy"] = 2] = "Rainy";
        Weather[Weather["Snowy"] = 4] = "Snowy";
        Weather[Weather["Stormy"] = 3] = "Stormy"; // Can reside inside
    })(Weather || (Weather = {}));
    var today = Weather.Snowy | Weather.Cloudy; // Can be outside as well
    if (Weather.Rainy === (today & Weather.Rainy)) { // Check
        console.log("Bring an umbrella");
    }
    today |= Weather.Rainy;
    today &= ~Weather.Snowy;
    console.log(today); // 3 -> 011 = Cloudy and Rainy
    if (Weather.Rainy === (today & Weather.Rainy)) { // Check
        console.log("Rainy");
    }
    if (Weather.Cloudy === (today & Weather.Cloudy)) { // Check
        console.log("Cloudy");
    }
    if ((Weather.Cloudy & Weather.Rainy) === (today & Weather.Cloudy & Weather.Rainy)) { // Check
        console.log("Cloudy and Rainy");
    }
})(enumVariable5 || (enumVariable5 = {}));
