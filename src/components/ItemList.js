import React from "react";
import Item from "./Item";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [itemsData, setItems] = useState(null);

  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Telefono Negro",
          description: "Description 1",
          price: 100,
          stock: 100,
          image:
            "https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/curiosidades.batanga.com/files/Quien-invento-el-telefono-3.jpg",
        },
        {
          id: 2,
          name: "Telefono de madera",
          description: "Description 2",
          price: 200,
          stock: 50,
          image:
            "https://sc04.alicdn.com/kf/Ha62e9eea998549fe8b0543fa6a99bc0eF.jpg",
        },
        {
          id: 3,
          name: "Telefono metalico",
          description: "Description 3",
          price: 300,
          stock: 150,
          image:
            "https://m.media-amazon.com/images/I/71lJl1WkNoL._AC_SY355_.jpg",
        },
      ]);
      reject(new Error("Error"));
    }, 3000);
  });

  useEffect(() => {
    data.then((data) => {
      console.log(data);
      setItems(data);
    });
  }, [itemsData]);

  return (
    <>
      {!itemsData ? <Loading /> : null}
      <div
        className="mx-4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {itemsData &&
          itemsData != null &&
          itemsData.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default ItemList;
