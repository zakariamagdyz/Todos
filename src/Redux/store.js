import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [logger];
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};
