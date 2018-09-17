namespace enumVariables {
	enum Weather {
		Sunny,
		Cloudy,
		Rainy,
		Snowy
	}

	let today: Weather = Weather.Snowy;
	console.log(today);
}

namespace enumVariables2 {
	enum Weather {
		Sunny = 100,
		Cloudy,
		Rainy,
		Snowy
	}

	let today: Weather = Weather.Cloudy;
	console.log(today); // prints 101
}

namespace enumVariables3 {
	enum Weather {
		Sunny = 100,
		Cloudy,
		Rainy = 200,
		Snowy
	}

	let today: Weather = Weather.Snowy;
	console.log(today); // prints 201
}

namespace enumVariables4 {
	enum Weather {
		Sunny = "Sun",
		Cloudy = "Cloud",
		Rainy = 200,
		Snowy
	}

	let today: Weather = Weather.Cloudy;
	let tomorrow: Weather = 200;
	console.log("Today value", today); // Today value Cloud
	// console.log("Today key", Weather[today]); // Today key undefined
	console.log("Tommorow value", tomorrow); // Tommorow value 200
	console.log("Tommorow key", Weather[tomorrow]); // Tommorow key Rainy
}

namespace enumVariable5 {
	enum Weather {
			Sunny = 0,
			Cloudy = 1 << 0,
			Rainy = 1 << 1,
			Snowy = 1 << 2,
			Stormy = Cloudy | Rainy // Can reside inside
	}
	let today: Weather = Weather.Snowy | Weather.Cloudy; // Can be outside as well
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
}