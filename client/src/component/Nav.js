import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");

  return (
    <div>
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
          {auth ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
