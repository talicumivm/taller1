import React from 'react';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#65E5DA' }}>
      <div className="container-fluid">
        {/* Logo */}
        {/* 
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
          Nopales
        </a> 
        */}
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            
            {/* Menú Desplegable para Catálogo */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="catalogoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catálogo
              </a>
              <ul className="dropdown-menu" aria-labelledby="catalogoDropdown">
                <li><a className="dropdown-item" href="#interior">Plantas de Interior</a></li>
                <li><a className="dropdown-item" href="#exterior">Plantas de Exterior</a></li>
                <li><a className="dropdown-item" href="#enredaderas">Enredaderas</a></li>
                <li><a className="dropdown-item" href="#suculentas">Suculentas</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
          
          {/* Barra de búsqueda */}
          <form className="d-flex justify-content-start" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-search"></i> {/* Ícono de lupa */}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
