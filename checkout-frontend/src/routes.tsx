import Home from "Pages/Home";
import Login from "Pages/Login";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    console.log("isAuth: ", isAuthenticated);
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