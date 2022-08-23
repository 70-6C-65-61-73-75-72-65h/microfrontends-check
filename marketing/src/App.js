import { StylesProvider } from "@material-ui/styles";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
export const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
          <Route />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

