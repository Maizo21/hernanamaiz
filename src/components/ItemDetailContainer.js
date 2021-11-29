import React from "react";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState(null);

  function getItem() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Telefono Negro",
            description:
              "Excelente dispositivo, se compone de dos circuitos: un circuito de conversación que se encarga de la voz y un circuito de marcación, vinculado a la marcación y a las llamadas.",
            price: 100.99,
            stock: 3,
            image:
              "https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/curiosidades.batanga.com/files/Quien-invento-el-telefono-3.jpg",
            coments: "Excelente telefono, recomendado",
            rating: 5,
            category: "Telefonos",
            brand: "Samsung",
            date: "01/05/2020",
          },
        ]);
        reject(new Error("Error"));
      }, 3000);
    });
  }

  useEffect(() => {
    getItem().then((data) => {
      setDetails(...data);
      console.log(...data);
    });
  }, []);

  return (
    <>
      {!details ? <Loading /> : null}
      {details && details != null ? <ItemDetail detailData={details} /> : null}
    </>
  );
};

export default ItemDetailContainer;
