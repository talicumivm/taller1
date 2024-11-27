import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);

