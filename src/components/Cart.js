import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
const Cart = () => {
  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 2,
  });
  const { items, deleteFromCart, quantityItem, totalPrice, emptyCart } =
    useCartContext();
  console.log("cart", items);
  return (
    <>
      <div className="ms-4 mt-2">
        <h2>Carrito</h2>
        {items.length === 0 && <p>Your cart is empty</p>}
        {items.length > 0 && (
          <div className="d-flex gap-4 flex-column">
            {items.map((obj, index) => (
              <div
                key={index}
                className="d-flex gap-3 align-items-center border-bottom border-1 border-dark pb-2"
                style={{ maxWidth: "30%" }}
              >
                <img
                  className="mr-2"
                  src={obj.item.image}
                  alt={obj.item.name}
                  style={{
                    width: "120px",
                    height: "auto",
                  }}
                />
                <div>
                  <p>{obj.item.name}</p>
                </div>

                <div className="text-center">
                  <p>Cantidad: {obj.quantity}</p>
                </div>
                <p className="text-center">
                  Precio:{" "}
                  <b>{formatPeso.format(obj.item.price * obj.quantity)}</b>
                </p>
              </div>
            ))}
            <div
              className="border border-2 border-success px-2 py-1 d-flex justify-content-between mb-2"
              style={{ width: "fit-content" }}
            >
              <h4>Total: {formatPeso.format(totalPrice())}</h4>
            </div>
          </div>
        )}
        <div className="d-flex gap-2">
          <div
            onClick={() => {
              emptyCart();
            }}
            className="btn btn-danger"
          >
            Vaciar Carrito
          </div>
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
