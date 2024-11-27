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
      <button
        className="carousel-button prev"
        onClick={(e) => {
          e.stopPropagation(); // Prevenir eventos adicionales
          prevSlide();
        }}
      >
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`Producto ${currentIndex + 1}`}
        className="carousel-image"
        onClick={(e) => e.stopPropagation()} // Prevenir navegación
      />
      <button
        className="carousel-button next"
        onClick={(e) => {
          e.stopPropagation(); // Prevenir eventos adicionales
          nextSlide();
        }}
      >
        ❯
      </button>
    </div>
  );
}

export default ProductCarousel;
