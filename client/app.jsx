import React from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import EchoEngHome from "./pages/home/components/echoEngHome.jsx";
import EchoEngTeam from "./pages/team/components/echoEngTeam.jsx";

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={EchoEngHome} />
					<Route path="about" component={EchoEngHome} />
					<Route path="/team" component={EchoEngTeam} />
					<Route path="contact" component={EchoEngHome} />
				</Switch>
			</BrowserRouter>
		);
	}
}
