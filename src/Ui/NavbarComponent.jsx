import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComponent.css";
import CartCard from "../components/CartCard";
const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);

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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ECOM
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav gap-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Store
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex">
            <a
              className="cart-container"
              href="#"
              onClick={() => setShowCart(!showCart)}
            >
              {" "}
              <i class="bi bi-cart text-white">Cart</i>{" "}
              <span class="badge bg-danger position-absolute top-0 start-100 translate-middle">
                3
              </span>{" "}
            </a>
          </div>
        </div>
      </nav>

      {showCart && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <h4>CART ITEMS</h4>
            <div className="cart-items">
              {cartElements.map((element, index) => (
                <div className="cart-items md" key={element.id}>
                  <CartCard
                    title={element.title}
                    price={element.price}
                    img={element.imageUrl}
                    quantity={element.quantity}
                  />
                </div>
              ))}
            </div>

            <button
              className="btn btn-secondary mt-3"
              onClick={() => setShowCart(false)}
            >Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
