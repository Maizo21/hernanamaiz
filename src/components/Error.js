import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="ms-4 mt-2">
        <h2>Error Page</h2>

        <p>La pagina a la intentas acceder no existe</p>

        <Link to="/" className="btn btn-secondary text-decoration-none">
          Volver a Inicio
        </Link>
      </div>
    </>
  );
};

export default Error;
