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

  const handleImageClick = () => {
    const phone = '56973016700'; // Reemplaza con el número de WhatsApp, sin el '+'
    const message = 'sexo';
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Producto ${currentIndex + 1}`} onClick={handleImageClick} style={{curso:'pointer'}} className="carousel-image" />
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ProductCarousel;
