import { API_KEY } from "./constants";

const url = (country) => {
	return `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}&aqi=no`;
};

export const getCountryTemperature = (country) => {
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
