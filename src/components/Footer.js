import React from 'react';
import '../footer.css'; // Asegúrate de que el archivo CSS esté correctamente enlazado

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content container-fluid">
        {/* Logo y Horario */}
        <div className="footer-section">
          <img src={require('../assets/imagenes/logo.png')} alt="Logo" className="footer-logo" />
          <h3>Horario de atención</h3>
          <p>Lun-Vie: 9.00 - 19.00</p>
          <p>Sab: 9.00 - 14.00</p>
          <p>Dom - cerrado</p>
          <h3>Ubicación:</h3>
          <p>Calle Sirio 2131, San Bernardo, Región Metropolitana</p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#about">+ Sobre el Vivero</a></li>
            <li><a href="#plant-care">+ Cuidados de las Plantas</a></li>
            <li><a href="#delivery-policy">+ Políticas de Envío</a></li>
            <li><a href="#contact">+ Contáctanos</a></li>
          </ul>
        </div>

        {/* Colecciones de Plantas */}
        <div className="footer-section">
          <h3>Colecciones de plantas</h3>
          <ul>
            <li><a href="#succulents">+ Suculentas</a></li>
            <li><a href="#indoor-plants">+ Plantas de Interior</a></li>
            <li><a href="#outdoor-plants">+ Plantas de Exterior</a></li>
            <li><a href="#flowering-plants">+ Plantas con Flores</a></li>
          </ul>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://www.instagram.com/_.plantitas.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/profile.php?id=61551609270206&locale=es_LA" className="social-link" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://wa.me/message/PKQTA47VQUEAF1" className="social-link" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024, Plantitas | Website Design by PKM Web Solution</p>
      </div>
    </footer>
  );
};

export default Footer;
