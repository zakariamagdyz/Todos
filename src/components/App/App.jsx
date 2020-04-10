import React from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
