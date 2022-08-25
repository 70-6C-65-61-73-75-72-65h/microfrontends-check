import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma"
});

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
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
