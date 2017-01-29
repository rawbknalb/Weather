import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxPromise from "redux-promise";

// Reducers
import rootReducer from "./store/reducers/index.js";

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App value={store} />
  </Provider>,
  rootEl
);
