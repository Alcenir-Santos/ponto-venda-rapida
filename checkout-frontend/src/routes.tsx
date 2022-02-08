import Home from "Pages/Home";
import Login from "Pages/Login";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import VerifyLogin from "Services/API/Login";

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  let isAuthenticated = false;
  if(localStorage.getItem("token") != null){
    const token = localStorage.getItem("token") || '';
    let tokendecoded: any = jwt_decode(token);
    let dateExpire = tokendecoded.exp;
    let dateNow = new Date();
    var s: string = dateNow.getTime().toString();
    var i: number = +s.substring(0, s.toString().length - 3);
    if (dateExpire - i <= 0) {
      isAuthenticated = false;
      localStorage.removeItem('token');
    }
    else{
      isAuthenticated = true;
    }
  }
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};


const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login">
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
            <Login />
        }
      />
    </Routes>
  </BrowserRouter>
)

export default MyRoutes;