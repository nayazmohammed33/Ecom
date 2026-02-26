import React from 'react'
import Button from "react-bootstrap/Button";

const CartCard = ({id,title,price,img,quantity,removeFromCart}) => {
  return (
    <div className='card mb-3' style={{maxWidth:"600px"}}>
        <div className="card-body ml-3 d-flex justify-content-between align-items-center">
            <img src={img} alt={title} className='card-img-top' style={{width:"100px",height:"100px"}} />
            <h5 className="card-title ml-3">{title}</h5>
            <p className="card-text ml-3">Price: ${price}</p>
            <p className="card-text ml-3">Quantity: {quantity}</p>
            <Button variant="primary" className="ml-3" onClick={() => removeFromCart(id)}>Remove</Button>
        </div>
    </div>
  )
}

export default CartCard