import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import trash from "./../img/trash.svg";
import "./Cart.css";
const Cart = () => {
  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 2,
  });
  const { items, deleteFromCart, totalPrice, emptyCart } = useCartContext();

  return (
    <>
      <div className="ms-4 mt-2 carrito">
        <h2 className="cart-title">Tu carrito</h2>
        {items.length === 0 && <p>Tu carrito esta vacío</p>}
        {items.length > 0 && (
          <>
            <h4>Tu compra está casi completa</h4>
            <div className="d-flex gap-4 flex-column cart-item-container">
              {items.map((obj, index) => (
                <div
                  key={index}
                  className="d-flex gap-3 align-items-center cart-item pb-4"
                >
                  <img
                    className="mr-2"
                    src={obj.item.img}
                    alt={obj.item.producto}
                    style={{
                      width: "120px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                  <div>
                    <p>{obj.item.producto}</p>
                  </div>

                  <div className="text-center">
                    <p>Cantidad: {obj.quantity}</p>
                  </div>
                  <p className="text-center">
                    Precio:{" "}
                    <b>{formatPeso.format(obj.item.price * obj.quantity)}</b>
                  </p>
                  <div
                    className=" trash btn-danger"
                    onClick={() => deleteFromCart(obj.item, items)}
                  >
                    <img src={trash} alt="eliminar" />
                  </div>
                </div>
              ))}
              <div className="carrito-total d-flex justify-content-between align-items-center">
                <h5 className="text-ligth">
                  Total: {formatPeso.format(totalPrice())}
                </h5>
              </div>
            </div>
          </>
        )}

        {items.length > 0 && (
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
            <Link
              to="/shooping"
              className="btn btn-success text-decoration-none"
            >
              Ir a pagar
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
