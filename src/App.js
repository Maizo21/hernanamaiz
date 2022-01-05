import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import Shooping from "./components/Shooping/Shooping";
import Swal from "sweetalert2";
/* 
Swal.fire({
  title: "¡Bienvenido a la tienda!",
  text: "Esperamos que disfrutes de nuestros productos 📱",
  confirmButtonText: "Gracias, joven 😎",
  showCancelButton: true,
  cancelButtonText: "No, prefiero escuchar musica 😎",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Adelante 🚪", "", "success");
  } else if (result.dismiss) {
    Swal.fire("Nos vemos luego 😎", "", "warning");
    let enlace = document.createElement("a");
    enlace.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    enlace.target = "_blank";
    setTimeout(() => {
      enlace.click();
    }, 1500);
  }
}); */

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
        </div>

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer props={`Bienvenido a la tienda`} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer props={`Bienvenido a la tienda`} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="/hernanamaiz"
            element={<ItemListContainer props={`Bienvenido a la tienda`} />}
          />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shooping" element={<Shooping />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
