import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Errorboundary from "../Error-boundary/ErrorBoundry";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const EditPage = lazy(() => import("../../pages/EditPage/EditPage"));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Errorboundary>
            <Suspense fallback={Spinner}>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/edit/:todoId" exact>
                <EditPage />
              </Route>
            </Suspense>
          </Errorboundary>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
