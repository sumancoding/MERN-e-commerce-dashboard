import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
            <Link to="/">Products</Link>
          </li>{" "}
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
            {/*  when we take it from localStorage its in string format so we need to convert it to json */}
          </li>{" "}
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          {" "}
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
