import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ props }) => {
  return (
    <>
      <p className="text-start ps-5 mt-2">{props}</p>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
