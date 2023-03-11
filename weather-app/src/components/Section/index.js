import React from "react";

import "./index.scss";

const Section = ({ country, position }) => {
	if (position == "top") {
		return (
			<div className="section-top">
				<header className="header">{country}</header>
			</div>
		);
	} else if (position == "bottom") {
		return (
			<div className="section-bottom">
				<header className="header">{country}</header>
			</div>
		);
	}
};

export default Section;
