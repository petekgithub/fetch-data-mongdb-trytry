import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "auth/Login";
import DetailView from "views/DetailView";
import ListView from "views/ListView";
import { RequireAuth } from 'react-auth-kit';
import Home from 'views/Home';

const Root: React.FC = () => {
  // return (
  //   <div style={{ height:"calc(100vh - 230px)", marginTop: 100,display: "flex", alignItems: "center", justifyContent: "center",}}>
  //     <Routes>
  //       <Route path='/' element={<Login />} /> 
  //       <Route path='/detailview' element={<DetailView/>} />
  //       <Route path='/listview' element={<ListView/>} />
  //     </Routes>
  //   </div>    
  // );

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