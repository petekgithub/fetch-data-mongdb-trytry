import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "Auth/pages/Login";
import Home from "Screens/Home";
import DetailView from "Screens/DetailView";
import ListView from "Screens/ListView";
import Register from 'Auth/pages/Register';

const Root: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/detailView' element={<DetailView/>} />
        <Route path='/listView' element={<ListView/>} />
    </Routes>
  );
};

export default Root;
