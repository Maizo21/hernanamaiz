import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext, CartProvider } from "./CartContext";

const Cart = () => {
  const { deleteFromCart } = useCartContext();
  const { quantityItem } = useCartContext();
  const { totalPrice } = useCartContext();
  const { emptyCart } = useCartContext();
  const { items } = useCartContext();

  console.log(items);

  /*   const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);
 */
  return (
    <>
      <div className="ms-4 mt-2">
        <h2>Carrito</h2>

        {items.length > 0 ? (
          items && items != null ? (
            <div>
              {items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mr-2"
                  />
                  <h2>{item.name}</h2>
                  <p>{quantityItem(item)}</p>
                  <small>{deleteFromCart(item)}</small>
                </div>
              ))}
              <p>Total: {totalPrice()}</p>
            </div>
          ) : null
        ) : (
          <p>No hay productos en el carrito</p>
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
