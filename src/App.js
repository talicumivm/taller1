import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm"; // Importa el componente ContactForm
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 
import producto1 from './assets/imagenes/producto1.jpg';
import producto2 from './assets/imagenes/producto5.jpg';
import producto3 from './assets/imagenes/producto3.jpg';
import producto4 from './assets/imagenes/producto4.jpg';

function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={
          <>
            <h4>Envío a traves de Starken o Bluexpress</h4>

            {/* Título y sección de consulta */}
            <div className="consulta">
              Consulta en Nuestros Canales de Atención
            </div>

            {/* Sección de productos */}
            <div className="productos">
              <div className="producto">
                <img src={producto1} alt="Producto 1" className="producto-imagen" />
                <h3>Palmera Chamadoera</h3>
                <p>$6500</p>
              </div>

              <div className="producto">
                <img src={producto2} alt="Producto 5" className="producto-imagen" />
                <h3>Singonio Plateado</h3>
                <p>$6000</p>
              </div>
ñ
              <div className="producto">
                <img src={producto3} alt="Producto 3" className="producto-imagen" />
                <h3>Planta de Incienso</h3>
                <p>$3000</p>
              </div>

              <div className="producto">
                <img src={producto4} alt="Producto 4" className="producto-imagen" />
                <h3>Violeta de Persia</h3>
                <p>$6000</p>
              </div>
            </div>
          </>
        }/>
        <Route path="/contacto" element={<ContactForm />} /> {/* Ruta al formulario de contacto */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
