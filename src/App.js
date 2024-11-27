import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 
import ProductCard from "./components/ProductCard";
import PlantDetail from './components/PlantDetail'; // Importa la nueva página

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



export const products = [
  {
    name: "Palmera Chamadoera",
    price: 6500,
    images: [producto1_1, producto1_2, producto1_3],
    navigateTo: "/detalles/palmera",
  },
  {
    name: "Singonio Plateado",
    price: 6000,
    images: [producto2_1, producto2_2, producto2_3],
    navigateTo: "/detalles/singonio",
  },
  {
    name: "Planta de Incienso",
    price: 3000,
    images: [producto3_1, producto3_2, producto3_3],
    navigateTo: "/detalles/incienso",
  },
  {
    name: "Violeta de Persia",
    price: 6000,
    images: [producto4_1, producto4_2, producto4_3],
    navigateTo: "/detalles/violeta",
  },
];

function App() {

  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  // Filtrar productos según el nombre
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Maneja el evento de búsqueda (usando el campo existente)
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Actualiza el query de búsqueda
  };
  return (
    <div>
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h4>Envío a través de Starken o Bluexpress</h4>

              {/* Título y sección de consulta */}
              <div className="consulta">Consulta en Nuestros Canales de Atención</div>

              {/* Sección de productos */}
              <div className="productos">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    images={product.images}
                    navigateTo={product.navigateTo}
                  />
                ))}
              </div>
            </>
          }
        />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/detalles/:plantName" element={<PlantDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
