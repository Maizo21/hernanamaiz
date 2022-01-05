import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  function addItem(item, quantity) {
    if (items.length !== 0) {
      const index = items.findIndex((obj) => {
        return obj.item.id === item.id;
      });
      if (index !== -1) {
        const newCart = items;
        newCart[index].quantity = newCart[index].quantity + quantity;
        setItems(newCart);
      } else setItems([...items, { item, quantity: quantity }]);
    } else setItems([{ item, quantity: quantity }]);
  }

  //eliminar por id
  const deleteFromCart = (dataItem, items) => {
    const itemsFilters = items.filter((item) => item.item.id != dataItem.id);
    setItems(itemsFilters);
    Swal.fire({
      icon: "error",
      title: "Producto eliminado",
      confirmButtonText: "Ok",
    });
  };
  //cantidad de item
  const quantityItem = () => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  //total precio de items
  const totalPrice = () => {
    return items.reduce(
      (acc, value) => acc + value.item.price * value.quantity,
      0
    );
  };
  //vaciar carrito
  const emptyCart = () => {
    setItems([]);
    Swal.fire({
      icon: "error",
      title: "El carrito se vació correctamente",
      confirmButtonText: "Ok",
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        deleteFromCart,
        quantityItem,
        totalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
