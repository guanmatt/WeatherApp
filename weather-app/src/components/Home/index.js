import React from "react";

import { API_KEY, COUNTRIES, SAMPLE_RESPONSE } from "./constants";
import {
	getCountryData,
	getTwoUniqueCountries,
	getTemperatureFromCountryData,
} from "./helpers";

import Section from "../Section";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Home = () => {
	return (
		<div>
			{/* <div>Hello</div>
			<button onClick={() => getCountryData("Canada")}>
				Get country data!
			</button>
			<button onClick={() => getTwoUniqueCountries()}>Get 2 countries!</button>
			<button onClick={() => getTemperatureFromCountryData(SAMPLE_RESPONSE)}>
				Parse a response
			</button> */}
			<div className="section-container">
				<Section country={"United States of America"} position={"top"} />
				<Section country={"Canada"} position={"bottom"} />
			</div>
		</div>
	);
};

export default Home;
