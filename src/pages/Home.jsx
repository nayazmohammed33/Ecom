import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const Home = () => {

    const {cartitems, addToCart,removeFromCart } = useCartContext();

  const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

  return (
    <div>
      <div className="products-container">
        {productsArr.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
