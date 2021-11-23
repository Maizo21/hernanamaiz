import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ props }) => {
  return (
    <>
      <p className="text-start ps-5 mt-2">{props}</p>
      <ItemCount stock={5} initial={1} />
      <ItemList />
    </>
  );
};

export default ItemListContainer;
