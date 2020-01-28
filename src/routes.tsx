import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./page/home";

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" exact={true} component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
