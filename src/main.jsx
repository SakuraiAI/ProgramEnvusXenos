import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const page = document.body.dataset.page || "home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>,
);
