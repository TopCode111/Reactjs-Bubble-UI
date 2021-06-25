import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "./store/ToastContext";
import { AppDataProvider } from "./store/AppContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <AppDataProvider>
    <ToastProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToastProvider>
  </AppDataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
