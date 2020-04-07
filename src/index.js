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

/*
1-make sub info clickaple
1.2-well done on achevment  well done keep up the good work
1.3-aauto ref
2-add redux persistor
3- remove all section only
4- search todos
5- add data base
6- use redux saga
8- responsive
*/
