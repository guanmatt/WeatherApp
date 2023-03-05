import React from "react";

import { API_KEY, COUNTRIES, SAMPLE_RESPONSE } from "./constants";
import { getCountryData, getTwoUniqueCountries, getTemperatureFromCountryData } from "./helpers";

const Home = () => {
	return (
		<div>
			<div>Hello</div>
			<button onClick={() => getCountryData("Canada")}>
				Get country data!
			</button>
			<button onClick={() => getTwoUniqueCountries()}>Get 2 countries!</button>
			<button onClick={() => getTemperatureFromCountryData(SAMPLE_RESPONSE)}>Parse a response</button>
		</div>
	);
};

export default Home;
