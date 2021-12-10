import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext, CartProvider } from "./CartContext";

const ItemCount = ({ stock, initial, data }) => {
  const { addItem } = useCartContext();
  const { deleteFromCart } = useCartContext();
  const { quantityItem } = useCartContext();
  const { totalPrice } = useCartContext();
  const { emptyCart } = useCartContext();
  const { items } = useCartContext();

  const [count, setCount] = useState(initial ? initial : 0);
  const [shoppingCart, setShoppingCart] = useState(false);

  const limit = stock;
  let comprado = false;

  const decrementNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("no");
    }
  };

  const incrementNumber = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      console.log("no");
    }
  };

  return (
    <>
      <div
        className="gap-2 p-2 rounded flex-column justify-content-center align-items-center w-25"
        style={{ display: !shoppingCart ? "flex" : "none" }}
      >
        <div className="d-flex gap-3 align-items-center group ">
          <button
            className="btn btn-secondary"
            onClick={() => decrementNumber()}
          >
            -
          </button>
          <div className="text-center">{count}</div>
          <button className="btn btn-primary" onClick={() => incrementNumber()}>
            +
          </button>
        </div>
        <div
          className="btn btn-success px-3"
          onClick={() => addItem(data, count, setShoppingCart)}
        >
          Add to cart
        </div>

        <div
          className="btn btn-success px-3"
          onClick={() => deleteFromCart(data, setShoppingCart)}
        >
          Delete Item
        </div>

        <div
          className="btn btn-success px-3"
          onClick={() => quantityItem(items)}
        >
          Cantidad
        </div>

        <div className="btn btn-success px-3" onClick={() => totalPrice(items)}>
          Precio total
        </div>

        <div
          className="btn btn-success px-3"
          onClick={() => emptyCart(setShoppingCart)}
        >
          Vaciar
        </div>
      </div>

      <div className={shoppingCart ? "d-block" : "d-none"}>
        <Link to="/cart">
          <button className="btn btn-success">
            <span className="badge badge-light">Terminar compra</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ItemCount;
