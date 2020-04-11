import React from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import EditPage from "../../pages/EditPage/EditPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Er = () => <div>error</div>;

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/edit/:todoId" exact component={EditPage}></Route>
          <Route component={Er}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
