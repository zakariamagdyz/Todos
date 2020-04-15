import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Errorboundary from "../Error-boundary/ErrorBoundry";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../Not-found/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const EditPage = lazy(() => import("../../pages/EditPage/EditPage"));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Errorboundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/edit/:todoId" exact>
                <EditPage />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>
        </Errorboundary>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
