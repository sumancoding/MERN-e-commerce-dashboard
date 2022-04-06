import React from "react";
import { Navigate, Outlet } from "react-router-dom"; //Private Component is wrapper, Outlet deals with component passed as a props

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  return <div>{auth ? <Outlet /> : <Navigate to="/signup" />}</div>;
};

export default PrivateComponent;
