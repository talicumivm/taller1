import React from 'react'
import { useNavigate } from "react-router-dom";
import ProductCarousel from './ProductCarousel';

const ProductCard = ({name, price, images, navigateTo }) => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(navigateTo, {
      state: { name, price, images }
    });
  };

  return (
    <div className="producto" onClick={handleClick}>
      <ProductCarousel images={images} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={handleClick}>Ver detalles</button>
    </div>
  );
  
}

export default ProductCard