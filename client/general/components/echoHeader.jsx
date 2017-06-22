import React from "react";
import { NavLink } from "react-router-dom";

export default class EchoHeader extends React.Component {
	render() {
		return (
			<div>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/team">Team</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
		);
	}
}
