import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../nav.css';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar el carrito
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Alternar el estado del carrito
  };

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsCartOpen(false); // Cierra el carrito al cambiar de página
  }, [location]);

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
          <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
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
            <p>No hay productos en tu carrito.</p>
            {/* Puedes agregar contenido dinámico aquí */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
