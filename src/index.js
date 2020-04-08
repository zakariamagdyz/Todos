import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

/*


1.3-aauto ref

3- remove all section only
4- search todos
5- add data base
6- use redux saga
8- responsive
*/
