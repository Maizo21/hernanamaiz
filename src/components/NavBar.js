import logo from "./../store.png";
import cart from "./../cart.png";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <a className="navbar-brand m-0 w-25 d-flex justify-content-start align-items-center">
              <img
                src={logo}
                className=" m-0"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </Link>
          <div class="navbar d-flex flex-nowrap">
            <Link to="/" class="nav-link text-light">
              Home
            </Link>
            <Link to={`/category/smartphones`} class="nav-link text-light">
              Smartphones
            </Link>
            <a
              className="w-25 me-2 rounded text-decoration-none"
              style={{
                filter: "invert(1)",
                cursor: "pointer",
              }}
            >
              <img src={cart} style={{ width: "30px", height: "35px" }} />
              <span className="text-dark">5</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
