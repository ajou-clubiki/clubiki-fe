import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks/worker";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
