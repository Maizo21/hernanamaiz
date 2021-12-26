import React from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = ({ props }) => {
  let category = useParams();

  const [itemsDB, setItemsDB] = useState([]);
  console.log(itemsDB);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "store"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      if (category && category.id) {
        setItemsDB(docs.filter((item) => item.category == category.id));
      } else {
        setItemsDB(docs);
      }
    };

    getData();
  }, [category]);

  return (
    <>
      <p className="text-start ps-5 mt-2">{props}</p>

      {!itemsDB ? <Loading /> : null}
      {itemsDB && itemsDB != null ? <ItemList data={itemsDB} /> : null}
    </>
  );
};

export default ItemListContainer;
