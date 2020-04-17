import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./appStyle";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Errorboundary from "../Error-boundary/ErrorBoundry";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../Not-found/NotFoundPage";

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
                <div>asdsad</div>
              </Route>
              <Route path="/yearly-todos">
                <TodoPage title="Yearly todo" timeFrame="yearly" />
              </Route>

              <Route path="/monthly-todos">
                <TodoPage title="Monthly todo" timeFrame="monthly" />
              </Route>

              <Route path="/weekly-todos">
                <TodoPage title="Weekly todo" timeFrame="weekly" />
              </Route>
              <Route path="/daily-todos">
                <TodoPage title="Daily todo" timeFrame="daily" />
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
