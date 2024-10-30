import {Routes, Route} from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div>
      <Nav/>
      <h1>Consulta en Nuestros Canales de Atención</h1>
      <Footer/>
    </div>

  
  );
}

export default App;
