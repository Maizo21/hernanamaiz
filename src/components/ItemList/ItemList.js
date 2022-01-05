import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import "./ItemList.css";

const ItemList = (itemsData) => {
  const [data, setItems] = useState(null);

  useEffect(() => {
    itemsData && itemsData != null && setItems(itemsData.data);
  });

  return (
    <>
      <div
        className="item-list"
        style={{
          display: "grid",
        }}
      >
        {data &&
          data != null &&
          data.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default ItemList;
