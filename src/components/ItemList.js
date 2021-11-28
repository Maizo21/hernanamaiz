import React from "react";
import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = (itemsData) => {
  const [data, setItems] = useState(null);

  useEffect(() => {
    itemsData && itemsData != null && setItems(itemsData.data);
  });

  return (
    <>
      <div
        className="mx-4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
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
