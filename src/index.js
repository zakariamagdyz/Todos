import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/store";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
