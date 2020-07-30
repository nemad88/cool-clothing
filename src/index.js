import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/cool-clothing">
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
