import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import NavbarComponent from "./Ui/NavbarComponent";
import CartProvider from "./context/CartProvider";
import FooterComponent from "./Ui/FooterComponent";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavbarComponent />
          <h1>The Generics</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <FooterComponent/>
        </Router>

      </div>
    </CartProvider>
  );
}

export default App;
