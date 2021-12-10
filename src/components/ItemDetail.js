import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (detailData) => {
  let item = detailData.detailData;

  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center  p-0 pb-4 border border-dark rounded ms-2 mt-4 mb-4">
        <h5 className="bg-secondary w-100 py-2 text-light">{item.name}</h5>
        <small className="align-self-start fst-italic ms-2">
          Caterogia: {item.category}
        </small>
        <img src={item.image} style={{ width: "100%", maxWidth: "150px" }} />
        <p className="w-25 mt-2">{item.description}</p>
        <p>
          Precio: <b>{formatPeso.format(item.price)}</b>
        </p>

        <ItemCount stock={item.stock} initial={1} data={item} />

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
