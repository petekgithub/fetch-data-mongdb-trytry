import "./Core/styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Auth/pages/Register";

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

