import React from "react";
import { useState } from "react";
import "./ItemCount.css";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const decrementNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const incrementNumber = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleOnAdd = () => {
    if (count > 0) {
      onAdd(count);
      setCount(initial);
    }
  };
  return (
    <>
      <div className="d-flex gap-2 rounded flex-column justify-content-center align-items-center btn-container">
        <div className="d-flex gap-4 align-items-center group align-items-center btn-count">
          <button className="btn btn-secondary " onClick={decrementNumber}>
            -
          </button>
          <div className="text-center">{count}</div>
          <button className="btn btn-primary" onClick={incrementNumber}>
            +
          </button>
        </div>
        <div className="btn btn-success addBtn" onClick={handleOnAdd}>
          Agregar al carrito
        </div>
      </div>
    </>
  );
};

export default ItemCount;
