import React from 'react'
import CartCard from '../components/CartCard';
import { useCartContext } from '../context/CartContext';
import Button from "react-bootstrap/Button";


const Cartpage = ({cartElements, setShowCart}) => {

    const {cartitems,removeFromCart} =useCartContext();

  return (
    <div>
        <div className="cart-overlay">
          <div className="cart-modal">
            <h4>CART ITEMS</h4>
            <div className="cart-items">
              {cartitems.map((element) => (
                <div className="cart-items md" key={element.id}>
                  <CartCard
                  id={element.id}
                    title={element.title}
                    price={element.price}
                    img={element.imageUrl}
                    quantity={element.quantity}
                    removeFromCart={removeFromCart}
                  />
                  <Button variant="primary" onClick={() => removeFromCart(element.id)}>Remove from Cart</Button>
                </div>
              ))}
            </div>

            <button
              className="btn btn-secondary mt-3"
              onClick={() => setShowCart(false)}
            >Close</button>
          </div>
        </div>
    </div>
  )
}

export default Cartpage