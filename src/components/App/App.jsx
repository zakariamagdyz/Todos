import React from "react";
import "../../Styles/App.scss";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
