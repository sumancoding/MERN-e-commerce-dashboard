import React from "react";
import { Navigate, Outlet } from "react-router-dom"; //Private Component is wrapper, Outlet deals with components being passed as props

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  return <div>{auth ? <Outlet /> : <Navigate to="/signup" />}</div>;
};

export default PrivateComponent;
