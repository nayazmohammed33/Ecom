import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComponent.css";
import CartCard from "../components/CartCard";
import Cartpage from "../pages/Cartpage";
import { useCartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  const {cartitems} = useCartContext();

  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ECOM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Home</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/store">Store</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact-Us</Link>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <a
              className="cart-container"
              href="#"
              onClick={() => setShowCart(!showCart)}
            >
              {" "}
              <i className="bi bi-cart text-white">Cart</i>{" "}
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                 {cartitems?.length || 0}
              </span>{" "}
            </a>
          </div>
        </div>
      </nav>

      {showCart && (
        <Cartpage setShowCart={setShowCart}/>
      )}
    </>
  );
};

export default NavbarComponent;
