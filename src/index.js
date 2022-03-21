//react
import React from "react";
import { render } from "react-dom";
//router
import { BrowserRouter } from "react-router-dom";
//redux
import { Provider } from "react-redux";
// local
import App from "./App";
import "./index.css";
import configureStore from "./store";

//dat prec
const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
