import React from "react";
import { useState } from "react";
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
    onAdd(count);
    setCount(initial);
  };
  return (
    <>
      <div className="d-flex gap-2 p-2 rounded flex-column justify-content-center align-items-center w-25">
        <div className="d-flex gap-3 align-items-center group justify-content-center align-items-center">
          <button className="btn btn-secondary " onClick={decrementNumber}>
            -
          </button>
          <div className="text-center">{count}</div>
          <button className="btn btn-primary" onClick={incrementNumber}>
            +
          </button>
        </div>
        <div
          className="btn btn-success px-3 d-flex justify-content-center align-items-center mx-auto my-0"
          onClick={handleOnAdd}
        >
          Add to cart
        </div>
      </div>
    </>
  );
};

export default ItemCount;
