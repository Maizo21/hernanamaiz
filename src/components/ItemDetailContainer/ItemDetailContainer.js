import React from "react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  //Data de la url (id)
  let data = useParams();

  //Donde se almacenara el detalle del producto
  const [details, setDetails] = useState(null);

  //Llamada a firebase y filtro de item con params
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "store"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setDetails(docs.find((element) => element.id == data.id));
    };

    getData();
  }, []);

  return (
    <>
      {!details ? <Loading /> : null}
      {details && details != null ? <ItemDetail detailData={details} /> : null}
    </>
  );
};

export default ItemDetailContainer;
