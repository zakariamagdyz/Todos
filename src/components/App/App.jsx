import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Errorboundary from "../Error-boundary/ErrorBoundry";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../Not-found/NotFoundPage";
import HomePage from "../../pages/Home-Page/Homepage";

const TodoPage = lazy(() => import("../../pages/Todo-Page/TodoPage"));
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
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/yearly-targets">
                <TodoPage title="Yearly targets" timeFrame="yearly" />
              </Route>

              <Route path="/monthly-targets">
                <TodoPage title="Monthly targets" timeFrame="monthly" />
              </Route>

              <Route path="/weekly-targets">
                <TodoPage title="Weekly targets" timeFrame="weekly" />
              </Route>
              <Route path="/daily-targets">
                <TodoPage title="Daily todos" timeFrame="daily" />
              </Route>
              <Route path="/edit/:todoId">
                <EditPage />
              </Route>
              <Route path="/:parentId">
                <TodoPage />
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
