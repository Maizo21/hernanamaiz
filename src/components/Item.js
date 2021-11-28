import React from "react";

const Item = (data) => {
  const { item } = data;
  return (
    <>
      <div
        className="card card-body d-flex flex-column justify-content-center align-items-center  p-0 border border-dark ms-2"
        style={{ width: "200px" }}
      >
        <h5 className="bg-secondary w-100 py-2">{item.name}</h5>
        <img src={item.image} style={{ width: "115px", height: "100px" }} />
        <p>{item.description}</p>
        <button className="btn btn-success px-2">
          Ver detalle del producto
        </button>
        <small>Stock: {item.stock}</small>
      </div>
    </>
  );
};

export default Item;
