import React from 'react';

const Footer = () => {
  return (
    <footer
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#A1E8AF',
        position: 'fixed', // Fija el footer al final
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center', // Centra el contenido
      }}
    >
      <div className="container-fluid">
        {/* Aquí puedes agregar un logo u otros elementos */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Instagram
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
