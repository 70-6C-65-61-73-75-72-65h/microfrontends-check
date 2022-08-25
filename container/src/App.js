import React from "react";
import { MarketingApp } from "./components/MarketingApp";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
});
export const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
