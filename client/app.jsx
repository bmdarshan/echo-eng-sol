import React from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route, hashHistory } from "react-router-dom";

import EchoEngHome from "./pages/home/components/echoEngHome.jsx";
import EchoEngTeam from "./pages/team/components/echoEngTeam.jsx";

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
			<div>
					<Route path="/" component={EchoEngHome} />
					<Route path="/about" component={EchoEngHome} />
					<Route path="/team" component={EchoEngTeam} />
					</div>
			</BrowserRouter>
		);
	}
}
