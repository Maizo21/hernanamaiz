import React from "react";
import Item from "./Item";

const ItemList = () => {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Item 1",
          description: "Description 1",
          price: 100,
        },
        {
          id: 2,
          name: "Item 2",
          description: "Description 2",
          price: 200,
        },
        {
          id: 3,
          name: "Item 3",
          description: "Description 3",
          price: 300,
        },
      ]);

      reject(new Error("Error"));
    }, 2000);
  });

  console.log(data);

  return (
    <>
      <div
        className="mx-4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};

export default ItemList;
