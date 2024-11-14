import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 
import ProductCarousel from './components/ProductCarousel';

// Importa las imágenes para cada producto
import producto1_1 from './assets/imagenes/producto1.jpg';
import producto1_2 from './assets/imagenes/producto1.1.jpg';
import producto1_3 from './assets/imagenes/producto1.2.jpg';  

import producto2_1 from './assets/imagenes/producto5.jpg';
import producto2_2 from './assets/imagenes/producto5.1.jpg';
import producto2_3 from './assets/imagenes/producto5.2.jpg';  

import producto3_1 from './assets/imagenes/producto3.jpg';
import producto3_2 from './assets/imagenes/producto3.1.jpg';
import producto3_3 from './assets/imagenes/producto3.2.jpg';


import producto4_1 from './assets/imagenes/producto4.jpg';
import producto4_2 from './assets/imagenes/producto4.1.jpg';
import producto4_3 from './assets/imagenes/producto4.2.jpg';



function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={
          <>
            <h4>Envío a través de Starken o Bluexpress</h4>

            {/* Título y sección de consulta */}
            <div className="consulta">
              Consulta en Nuestros Canales de Atención
            </div>

            {/* Sección de productos */}
            <div className="productos">
              <div className="producto">
                <ProductCarousel images={[producto1_1, producto1_2, producto1_3]} />
                <h3>Palmera Chamadoera</h3>
                <p>$6500</p>
              </div>

              <div className="producto">
                <ProductCarousel images={[producto2_1, producto2_2, producto2_3]} />
                <h3>Singonio Plateado</h3>
                <p>$6000</p>
              </div>

              <div className="producto">
                <ProductCarousel images={[producto3_1, producto3_2, producto3_3]} />
                <h3>Planta de Incienso</h3>
                <p>$3000</p>
              </div>

              <div className="producto">
                <ProductCarousel images={[producto4_1, producto4_2,producto4_3]} />
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
