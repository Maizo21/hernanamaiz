import React from "react";
import { Link } from "react-router-dom";

const Item = (data) => {
  const { item } = data;
  return (
    <>
      <div
        className="card card-body d-flex flex-column justify-content-center align-items-center  p-0 border border-dark ms-2"
        style={{ width: "200px" }}
        id={item.id}
      >
        <h5 className="bg-secondary w-100 py-2 text-center">{item.name}</h5>
        <img src={item.image} style={{ height: "100px" }} />
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
