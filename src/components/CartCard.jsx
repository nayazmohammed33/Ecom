import React from 'react'

const CartCard = ({title,price,img,quantity}) => {
  return (
    <div className='card mb-3' style={{maxWidth:"600px"}}>
        <div className="card-body ml-3 d-flex justify-content-between align-items-center">
            <img src={img} alt={title} className='card-img-top' style={{width:"100px",height:"100px"}} />
            <h5 className="card-title ml-3">{title}</h5>
            <p className="card-text ml-3">Price: ${price}</p>
            <p className="card-text ml-3">Quantity: {quantity}</p>
        </div>
    </div>
  )
}

export default CartCard