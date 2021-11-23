import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial ? initial : 0);

  const limit = stock;

  const decrementNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("no");
    }
  };

  const incrementNumber = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      console.log("no");
    }
  };

  const addItem = () => {
    if (count != 0) {
      let item = count > 1 ? "items" : "item";
      alert(`You have added ${count} ${item} to your cart`);
    }
  };

  return (
    <>
      <div className="gap-2 p-2 rounded d-flex flex-column justify-content-center align-items-center w-25">
        <div className="d-flex gap-3 align-items-center group ">
          <button
            className="btn btn-secondary"
            onClick={() => decrementNumber()}
          >
            -
          </button>
          <div className="text-center">{count}</div>
          <button className="btn btn-primary" onClick={() => incrementNumber()}>
            +
          </button>
        </div>
        <div className="btn btn-success px-3" onClick={() => addItem()}>
          Add to cart
        </div>
      </div>
    </>
  );
};

export default ItemCount;
