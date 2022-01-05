import logo from "./../img/mobile-game.svg";
import cart from "./../../cart.png";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

const NavBar = () => {
  const { quantityItem } = useCartContext();

  const [itemsQuantity, setItemsQuantity] = useState(0);

  useEffect(() => {
    setItemsQuantity(quantityItem());
  }, [quantityItem]);

  return (
    <>
      <div className="navBar-msg">Contamos con envíos a todo el país</div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand m-0 w-25 d-flex justify-content-start align-items-center text-decoration-none">
              <img
                src={logo}
                className="logo m-0"
                style={{ width: "50px", height: "50px" }}
              />
              <span className="navBar-title">EZ Geek</span>
            </a>
          </Link>
          <div className="navbar d-flex flex-nowrap">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <Link to={`/category/smartphones`} className="nav-link text-light">
              Smartphones
            </Link>
            <Link to={`/category/telefonos`} className="nav-link text-light">
              Teléfonos
            </Link>
            <Link
              to="/cart"
              className="w-25 me-2 rounded text-decoration-none"
              style={{
                filter: "invert(1)",
                cursor: "pointer",
              }}
            >
              <img src={cart} style={{ width: "30px", height: "35px" }} />
              <span className="text-dark ms-1">{itemsQuantity}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
