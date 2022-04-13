import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./logo.png";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/signup");
  }

  return (
    <div>
      <img src={Logo} alt="website-logo" className="logo" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <NavLink to="/">Products</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/add">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/update">Update Product</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            {" "}
            <NavLink onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </NavLink>
            {/*  when we take it from localStorage its in string format so we need to convert it to json */}
          </li>{" "}
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          {" "}
          <li>
            {" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
