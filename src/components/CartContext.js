import React, { createContext } from "react";

export const CartContext = createContext();

const initial = [
  {
    id: 1,
    name: "Telefono Negro",
    description: "Description 1",
    price: 100,
    stock: 100,
    image:
      "https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/curiosidades.batanga.com/files/Quien-invento-el-telefono-3.jpg",
    coments: "Excelente telefono, recomendado",
    rating: 5,
    category: "Telefonos",
    brand: "Samsung",
    date: "01/05/2020",
  },
  {
    id: 2,
    name: "Telefono de madera",
    description: "Description 2",
    price: 200,
    stock: 50,
    image: "https://sc04.alicdn.com/kf/Ha62e9eea998549fe8b0543fa6a99bc0eF.jpg",
    coments: "Excelente telefono, recomendado",
    rating: 5,
    category: "Telefonos",
    brand: "Motorola",
    date: "01/05/1980",
  },
  {
    id: 3,
    name: "Telefono metalico",
    description: "Description 3",
    price: 300,
    stock: 150,
    image: "https://m.media-amazon.com/images/I/71lJl1WkNoL._AC_SY355_.jpg",
    coments: "Excelente telefono, recomendado",
    rating: 5,
    category: "Telefonos",
    brand: "Nokia",
    date: "05/01/1990",
  },
  {
    id: 4,
    name: "Redmi Note 9",
    description: "Description 4",
    price: 400,
    stock: 10,
    image:
      "https://miportal.entel.cl/static/113020211402374/images/J15S-Black-front_276x549.jpg",
    coments: "Recomendado",
    rating: 5,
    category: "smartphones",
    brand: "Xiaomi",
    date: "05/01/2021",
  },
];

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState(initial);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
