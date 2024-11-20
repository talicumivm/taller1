import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation de react-router-dom
import '../nav.css';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Cerrar el dropdown cuando cambias de página
  useEffect(() => {
    setIsDropdownOpen(false); // Cierra el dropdown al cambiar de página
  }, [location]); // Este efecto se ejecuta cuando la ubicación cambia

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isDropdownOpen ? 'true' : 'false'} // Establece el estado de apertura
          aria-label="Toggle navigation"
          onClick={toggleDropdown} // Abre/cierra el dropdown
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Enlaces de Navegación Izquierda */}
          <div className="navbar-left">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>

              {/* Menú Desplegable de Catálogo */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="catalogoDropdown"
                  role="button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown} // Cambia el estado de apertura al hacer clic
                >
                  Catálogo
                </a>

                {/* Muestra el menú si `isDropdownOpen` es true */}
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

          {/* Enlace del Logo Centrado */}
          <div className="navbar-center">
            <Link to="/" className="navbar-logo">
              <img src={require('../assets/imagenes/logo.png')} alt="Logo" className="logo-image" />
            </Link>
          </div>

          {/* Enlaces de Navegación Derecha */}
          <div className="navbar-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/contacto"> {/* Ajuste para redirigir al formulario de contacto */}
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <form className="d-flex justify-content-start search-bar" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
