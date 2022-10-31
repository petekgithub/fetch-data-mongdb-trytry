import "./Core/styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "Root";
//import { AuthProvider } from "context/AuthProvider";
import { AuthProvider } from "react-auth-kit";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
       >
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </AuthProvider >
  );
  </React.StrictMode>
);

