import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount />
      <ItemListContainer props={"Bienvenido a la tienda"} />
    </div>
  );
}

export default App;
