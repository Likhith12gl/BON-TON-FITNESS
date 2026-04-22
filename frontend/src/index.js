import React from "react";
import ReactDOM from "react-dom/client";
import "@/lib/r3f-shim";
import "@/index.css";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
