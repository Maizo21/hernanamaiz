import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

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
            element={<ItemListContainer props={"Bienvenido a la tienda"} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer props={"Bienvenido a la tienda"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="/hernanamaiz"
            element={<ItemListContainer props={"Bienvenido a la tienda"} />}
          />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
