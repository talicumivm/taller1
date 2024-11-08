import React from 'react';
import '../contactForm.css'; // Asegúrate de crear y enlazar este archivo CSS

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>¡CONTÁCTANOS!</h2>
      <form className="contact-form">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre" required />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Correo Electrónico" required />
        </div>
        <div className="form-group">
          <label>Asunto</label>
          <input type="text" placeholder="Asunto" required />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
