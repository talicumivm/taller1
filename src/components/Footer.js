import React from 'react';

const Footer = () => {
  return (
    <footer
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#65E5DA',
        position: 'fixed', 
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center', 
      }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Instagram
                <form className="d-flex" role="search">
                  <button className="btn btn-outline-success" type="submit">
                    <i className="bi bi-instagram"></i> {/* Ícono de Instagram  */}
                  </button>
                </form>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
