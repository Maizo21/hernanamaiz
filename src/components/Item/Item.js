import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (data) => {
  const { item } = data;
  return (
    <>
      <div
        className="card card-body d-flex flex-column justify-content-center align-items-center p-1 border border-dark item"
        style={{ width: "200px" }}
        id={item.id}
      >
        <h5 className="bg-secondary w-100 py-2 text-center">{item.producto}</h5>
        <img
          src={item.img}
          style={{ height: "100px" }}
          alt={`Imagen del Producto ${item.producto}`}
        />
        <p>{item.description}</p>
        <Link to={`/item/${item.id}`}>
          <button className="btn btn-success px-2">
            Ver detalle del producto
          </button>
        </Link>
        <small>Stock: {item.stock}</small>
      </div>
    </>
  );
};

export default Item;
