import "./Core/styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "Root";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  </React.StrictMode>
);

