import React from "react";

import { API_KEY, COUNTRIES } from "./constants";
import { getCountryTemperature } from "./helpers";

const Home = () => {
	return (
		<div>
			<div>Hello</div>
			<button onClick={() => getCountryTemperature("Canada")}>
				I love everyone equally
			</button>
		</div>
	);
};

export default Home;
