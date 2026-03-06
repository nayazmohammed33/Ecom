import React from 'react';
import { useParams,useLocation  } from 'react-router-dom';



const ProductDetails = (props) => {
  const { productid } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  return (
    <div>
      <h1>ProductDetail {productid}</h1>
      <h2>{product?.title}</h2>
    </div>
  )
}

export default ProductDetails;