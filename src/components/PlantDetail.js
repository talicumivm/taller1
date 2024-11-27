import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCarousel from "./ProductCarousel"; // Componente para las imágenes
import "../PlantDetail.css";
import { useCart } from './CartContext';

function PlantDetail() {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    const newItem = { name, price, images };
    setCart((prevCart) => {
      const updatedCart = [...prevCart, newItem];
      console.log("Carrito actualizado:", updatedCart); // Confirmar el cambio
      return updatedCart;
    });
  };
  const location = useLocation();
  const navigate = useNavigate();

  // Manejo robusto de location.state
  const state = location.state || {}; // Si state es null, usa un objeto vacío
  const { name = "Planta desconocida", price = "No disponible", images = [] } = state;

  // Manejo de casos donde no se pasa state
  if (!location.state) {
    // Opcional: redirigir a otra página si location.state es null
    navigate("/"); // Cambia "/" por la ruta que prefieras
    return null; // Detener la renderización
  }

  const handleSendMessage = () => {
    const phoneNumber = "56973016700"; // Tu número de WhatsApp
    const message = `Hola, estoy interesado en la planta ${name}. ¿Podrías darme más información?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank"); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <div className="plant-detail-container">
      <div className="plant-detail-content">
        <div className="plant-carousel">
          {images.length > 0 ? (
            <ProductCarousel images={images} />
          ) : (
            <p>No hay imágenes disponibles.</p>
          )}
        </div>
        <div className="plant-info">
          <h1>{name}</h1>
          <h2>{price}</h2>
          <p>
            Esta es una planta increíble conocida como {name}. Tiene
            características únicas que la hacen perfecta para decoración,
            purificación del aire y embellecimiento de espacios interiores.
          </p>
          <button onClick={handleSendMessage} className="send-message-button">
            Mandar Mensaje
          </button>
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default PlantDetail;
