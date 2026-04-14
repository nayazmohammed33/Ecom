import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";

import NavbarComponent from "./Ui/NavbarComponent";
import CartProvider from "./context/CartProvider";
import FooterComponent from "./Ui/FooterComponent";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavbarComponent />
          
          <Routes>
            <Route path="/"  element={<Products />} />
            <Route path="/products"  element={<Products />} />
            <Route path="/products/:productid" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <FooterComponent/>
        </Router>

      </div>
    </CartProvider>
  );
}

export default App;
