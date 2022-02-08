import Home from "Pages/Home";
import Login from "Pages/Login";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const token = localStorage.getItem("token") || '';
  let tokendecoded: any =  jwt_decode(token);
    let dateExpire: number = tokendecoded.exp;
    let dateinc = tokendecoded.iat;
    let dateNow = new Date();
    let res = dateNow.getTime() - dateExpire;
    console.log("atual",dateNow);
    console.log("diferença",res);
    console.log("expiração",dateExpire);
    console.log("token", tokendecoded);
    console.log("data 0", new Date());
    //console.log("token", token);
    const isAuthenticated = localStorage.getItem("token") !== null;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

const MyRoutes = () =>(
    <BrowserRouter>
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/">
            <Home />
          </PrivateRoute>
        }
      />
      
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default MyRoutes;