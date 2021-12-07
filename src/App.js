import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Error from "./components/Error";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

function App() {
  return (
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
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
