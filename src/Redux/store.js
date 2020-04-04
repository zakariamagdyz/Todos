import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

  return store;
};
