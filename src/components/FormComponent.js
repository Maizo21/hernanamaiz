import React, { useState } from "react";
import { db } from "./../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useCartContext } from "./CartContext";

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  adress: "",
};

const FormComponent = () => {
  const { items, totalPrice } = useCartContext();

  const msg = (isId) => {
    if (isId != "") {
      document.querySelector(".mensaje").classList.add("mt-4");

      document.querySelector(
        ".mensaje"
      ).innerHTML = `La orden se ha realizado correctamente bajo el id:  ${isId}`;
    } else {
      document.querySelector(
        ".mensaje"
      ).innerHTML = `No se ha podido realizar la orden`;
    }
  };

  const [values, setValues] = useState(initialState);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const fullDate = `fecha:${day}/${month}/${year} Hora:${hour}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const price = totalPrice();
    setValues({ ...values, [name]: value, items, fullDate, price });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "purchases"), { values });

    console.log(docRef.id);
    msg(docRef.id);
  };

  return (
    <>
      <div className="w-50 mt-4 ms-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              placeholder="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputApellido"
              placeholder="Apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              <small className="fst-italic">
                No compartiremos tu correo con nadie.
              </small>
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputAdress"
              placeholder="Dirección"
              name="adress"
              value={values.adress}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>

        <div className="mensaje p-2 text-center text-success border-success"></div>
      </div>
    </>
  );
};

export default FormComponent;
