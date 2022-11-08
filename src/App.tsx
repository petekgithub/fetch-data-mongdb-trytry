import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "auth/Login";
import DetailView from "views/DetailView";
import ListView from "views/ListView";
import { RequireAuth } from 'react-auth-kit';
import Home from 'views/Home';

const Root: React.FC = () => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/detailview' element={<DetailView/>}/>
        <Route path='/listview' element={<ListView/>} />
      </Routes>
    </>
  );
};

export default Root;
