import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../nav.css';
import { useCart } from './CartContext';
import CartItem from './CartIem';

const Nav = ({ searchQuery,  setSearchQuery}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar el carrito
  const location = useLocation();
  const { cart, setCart, removeFromCart, getTotalPrice } = useCart();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Alternar el estado del carrito
  };

    // Función para enviar el mensaje con todos los productos en el carrito
    const handleSendWhatsappMessage = () => {
      if (cart.length === 0) return;
  
      // Crear un mensaje con los detalles de cada producto
      let message = 'Hola, me gustaría preguntar sobre los siguientes productos en el carrito:\n\n';
      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price}€\n`;
      });
      message += `\nTotal: ${getTotalPrice()}€`;
  
      // URL para abrir WhatsApp con el mensaje
      const phoneNumber = '56973016700'; // Tu número de WhatsApp
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      // Abre WhatsApp en una nueva pestaña
      window.open(whatsappLink, '_blank');
    };


  useEffect(() => {
    setIsDropdownOpen(false);
    setIsCartOpen(false); // Cierra el carrito al cambiar de página
  }, [location]);


  // Maneja el evento de búsqueda (usando el campo existente)
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Actualiza el query de búsqueda
  };

  const purchaseItem = (id) => {
    const isSuccess = Math.random() > 0.5; // Generar resultado aleatorio (50% éxito)
    
    if (isSuccess) {
      alert('¡Pago exitoso! Gracias por tu compra.');
      setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Eliminar el producto comprado del carrito
      setCart([]); // Vaciar el carrito
    } else {
      alert('El pago fue rechazado. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isDropdownOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-left">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="catalogoDropdown"
                  role="button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  Catálogo
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show horizontal-menu" aria-labelledby="catalogoDropdown">
                    <li><a className="dropdown-item" href="#interior">Plantas de Interior</a></li>
                    <li><a className="dropdown-item" href="#exterior">Plantas de Exterior</a></li>
                    <li><a className="dropdown-item" href="#enredaderas">Enredaderas</a></li>
                    <li><a className="dropdown-item" href="#suculentas">Suculentas</a></li>
                    <li><a className="dropdown-item" href="#articulos">Artículos de Jardinería</a></li>
                    <li><a className="dropdown-item" href="#ofertas">Ofertas</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="navbar-center">
            <Link to="/" className="navbar-logo">
              <img src={require('../assets/imagenes/logo.png')} alt="Logo" className="logo-image" />
            </Link>
          </div>

          <div className="navbar-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
              {/* Botón de carrito */}
              <li className="nav-item">
                <button className="btn cart-button" onClick={toggleCart}>
                  🛒
                </button>
              </li>
            </ul>
          </div>
        </div>

        <form className="d-flex justify-content-start search-bar" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar..." 
          aria-label="Search" value={searchQuery}
                  onChange={handleSearchChange}
              />
          <button className="btn btn-outline-success" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      {/* Ventana emergente del carrito */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <button className="close-button" onClick={toggleCart}>✖</button>
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
              <p>No hay productos en tu carrito.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <div>
                    <CartItem item={item}  onRemove={removeFromCart} key={index}   onPurchase={purchaseItem} />
                  </div>

                ))}
              </ul>
            )}
            <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Total:</strong> {getTotalPrice()}€
                </li>
                <button
              onClick={handleSendWhatsappMessage}
              className="btn btn-primary w-100 mt-3"
            >
              Enviar a WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
