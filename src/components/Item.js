import React from "react";

const Item = (data) => {
  return (
    <>
      <div
        className="card card-body d-flex flex-column justify-content-center align-items-center  p-0 border border-dark ms-2"
        style={{ width: "200px" }}
      >
        <h4 className="bg-secondary w-100">Titulo</h4>
        <img
          src="https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/curiosidades.batanga.com/files/Quien-invento-el-telefono-3.jpg"
          style={{ width: "100px" }}
        />
        <p>Descripcion</p>
        <button className="btn btn-success px-2">
          Ver detalle del producto
        </button>
        <small>Stock:</small>
      </div>
    </>
  );
};

export default Item;
