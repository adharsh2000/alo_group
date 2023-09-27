import React from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


export  const PublicRoutes = () => {
    const { token } = useSelector((state) => state.user);
    return token ? <Navigate to="/" /> : <Outlet/>
}