import React from 'react';
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import EchoEngHome from "./pages/home/components/echoEngHome.jsx";


export default class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" component={EchoEngHome} />
      </Switch>
    </BrowserRouter>);
  }
}