import React from "react";
import { Link } from "react-router-dom";

export default class EchoHeader extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/team">Team</Link>
				</li>
			</ul>
		);
	}
}
