import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="ms-4 mt-2">
        <h2>Carrito</h2>

        <p>Productos...</p>

        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-primary text-decoration-none">
            Seguir comprando
          </Link>
          <Link to="/" className="btn btn-success text-decoration-none">
            Ir a pagar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
