import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "Auth/pages/Login";
import DetailView from "Screens/DetailView";
import ListView from "Screens/ListView";
import Register from 'Auth/pages/Register';
import Header from 'Core/components/Header';
import Footer from 'Core/components/Footer';
import Home from 'Screens/Home';

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ height:"calc(100vh - 230px)", marginTop: 100,display: "flex", alignItems: "center", justifyContent: "center",}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/detailview' element={<DetailView/>} />
        <Route path='/listview' element={<ListView/>} />
    </Routes>
      </div>    
    <Footer />
    </>
  );
};

export default Root;
