import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  //funcion agregar al carrito
  /*   const addItem = (dataItem, count, setShoppingCart) => {
    if (count != 0) {
      alert(`You have added ${count} ${dataItem.name} to your cart`);
      setShoppingCart(true);

      if (items.some((item) => item.id === dataItem.id)) {
        let newItems = items.map((item) => {
          if (item.id === dataItem.id) {
            item.count += count;
          }
          return item;
        });
        setItems(newItems);
        alert(
          `You have ${newItems.find((item) => item.id === dataItem.id).count} ${
            dataItem.name
          } in your cart now.`
        );
      } else {
        setItems([...items, { ...dataItem, count: count }]);
      }
    }
  };
 */
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
  const deleteFromCart = (dataItem) => {
    const itemsFilters = items.filter((item) => item.id !== dataItem.id);
    setItems(itemsFilters);
  };
  //cantidad de items
  const quantityItem = () => {
    console.log(items.reduce((acc, item) => acc + item.count, 0));
    return items.reduce((acc, item) => acc + item.count, 0);
  };
  //cantidad por precio =total
  /*   const totalPrice = () => {
    console.log(items.reduce((acc, item) => acc + item.price * item.count, 0));
    return items.reduce((acc, item) => acc + item.price * item.count, 0);
  }; */

  const totalPrice = () => {
    //console.log(items.reduce((acc, item) => acc + item.price * item.count, 0));
    return items.reduce(
      (acc, value) => acc + value.item.price * value.quantity,
      0
    );
  };
  //vaciar carrito
  const emptyCart = () => {
    setItems([]);
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
