import React from "react";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "./../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  //Data de la url (id)
  let data = useParams();

  //Donde se almacenara el detalle del producto
  const [details, setDetails] = useState(null);

  //Datos traidos de firebase
  const [itemsDB, setItemsDB] = useState([]);

  //Llamada a firebase
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "store"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItemsDB(docs);
    };

    getData();
  }, []);

  //Filtro de datos con el id de la url
  function getItem(itemId) {
    console.log(itemId.id);

    setDetails(itemsDB.find((element) => element.id == itemId.id));
  }

  //Llamada a la funcion getItem y actualizacion de Details
  useEffect(() => {
    itemsDB && itemsDB != null && getItem(data);
    /*     console.log(data);
    getItem(data);
    console.log(getItem(data));
    console.log(details); */
  }, []);

  return (
    <>
      {!details ? <Loading /> : null}
      {details && details != null ? <ItemDetail detailData={details} /> : null}
    </>
  );
};

export default ItemDetailContainer;
