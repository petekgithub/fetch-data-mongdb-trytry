import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "auth/Login";
import DetailView from "Screens/DetailView";
import ListView from "Screens/ListView";
//import { RequireAuth } from 'react-auth-kit';

const Root: React.FC = () => {

  return (
    <>
    <div style={{ height:"calc(100vh - 230px)", marginTop: 100,display: "flex", alignItems: "center", justifyContent: "center",}}>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/detailview' element={<DetailView/>} />
        <Route path='/listview' element={<ListView/>} />
      </Routes>
    </div>    
    </>
  );
};

export default Root;
