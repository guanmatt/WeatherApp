import { API_KEY, COUNTRIES, } from "./constants";

const url = (country) => {
	return `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}&aqi=no`;
};

export const getCountryData = (country) => {
	fetch(url(country))
		.then(async (response) => {
			const data = await response.json();

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response statusText
				const error = (data && data.message) || response.statusText;
				return Promise.reject(error);
			}

			console.log(data);
		})
		.catch((error) => {
			console.error("There was an error!", error);
		});
};

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getTwoUniqueCountries = () => {
	let x = randomIntFromInterval(0, COUNTRIES.length - 1)
	let y = x
	do {
		y = randomIntFromInterval(0, COUNTRIES.length - 1)
	} while (x === y)

	console.log(`The first country is ${COUNTRIES[x]}.`)
	console.log(`The second country is ${COUNTRIES[y]}.`)
};

export const getTemperatureFromCountryData = (data) => {
	const dataObj  = JSON.parse(data)

	if(`error` in dataObj) {
		console.log("Country does not exist!")
		return
	}

	console.log(
		`country: ${dataObj[`location`][`country`]}, city: ${dataObj['location']['name']}, temperature: ${dataObj['current']['temp_c']}`)
};