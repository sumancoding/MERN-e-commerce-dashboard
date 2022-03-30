import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
          <NavLink to="/logout">Logout</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
