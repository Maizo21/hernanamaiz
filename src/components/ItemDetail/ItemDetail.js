import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import Swal from "sweetalert2";
const ItemDetail = (detailData) => {
  const [shoppingCart, setShoppingCart] = useState(false);

  const { addItem } = useCartContext();

  let item = detailData.detailData;
  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 2,
  });

  const onAdd = (quantity) => {
    addItem(item, quantity);
    setShoppingCart(true);
    Swal.fire({
      icon: "success",
      title: "¡Agregado!",
      text: `Agregaste ${quantity} "${item.producto}" a tu carrito 🛒`,
      confirmButtonText: "Ok 👏",
    });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-0 pb-4 border border-dark item-detail">
        <h5 className="bg-secondary w-100 py-2 text-light">{item.producto}</h5>
        <small className="align-self-start fst-italic ms-2 category">
          Caterogia: {item.category}
        </small>
        <img
          src={item.img}
          style={{ width: "100%", maxWidth: "200px" }}
          alt={`Imagen del Producto ${item.producto}`}
        />
        <p className="w-25 mt-2 text-center">{item.description}</p>
        <p>
          Precio: <b>{formatPeso.format(item.price)}</b>
        </p>
        {!shoppingCart && (
          <ItemCount stock={item.stock} initial={1} data={item} onAdd={onAdd} />
        )}
        {shoppingCart && (
          <Link to="/cart">
            <button className="btn btn-success">
              <span className="badge badge-light">Terminar compra</span>
            </button>
          </Link>
        )}
        <small>Marca: {item.brand}</small>
        <small>Fecha de lanzamiento: {item.date}</small>
        <small>Calificacion: {item.rating}/5</small>
        <small>Comentarios de clientes: {item.coments}</small>
        <small>Stock: {item.stock}</small>
      </div>
    </>
  );
};
export default ItemDetail;
