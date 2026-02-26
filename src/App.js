import "./App.css";

import NavbarComponent from "./Ui/NavbarComponent";
import CartProvider from "./context/CartProvider";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavbarComponent />
        <h1>The Generics</h1>
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
