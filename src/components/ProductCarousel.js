// ProductCarousel.js
import React, { useState } from 'react';

function ProductCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };


  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Producto ${currentIndex + 1}`} className="carousel-image" />
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ProductCarousel;
