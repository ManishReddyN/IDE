import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Redirection from "./redirect";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:shortid" component={Redirection} />
        <Route exact component={App} />
      </Switch>
    </BrowserRouter>
  );
}
