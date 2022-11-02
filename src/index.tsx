
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
//import { AuthProvider } from "context/AuthProvider";
import { AuthProvider } from "react-auth-kit";
import 'antd/dist/antd.css'; 
import App from './App';


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
          <App />
        </BrowserRouter>
      </AuthProvider >
  
  </React.StrictMode>
);

