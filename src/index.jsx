import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18next/i18next";

ReactDOM.render(
  <React.StrictMode>
    <div className="body-wrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
