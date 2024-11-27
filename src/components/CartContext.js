import { createContext, useContext, useState } from "react";

// Crea el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id)); // Elimina el ítem por su id
  };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + parseFloat(item.price), 0); // Convierte el precio a número
//   };
const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Verifica si el precio es un número válido
      const price = parseFloat(item.price);
      
      // Si el precio no es un número válido, lo ignoramos
      if (isNaN(price)) {
        console.warn(`El precio no es válido para el item: ${item.name}`);
        return total; // No sumamos este item
      }
  
      // Sumar el precio válido
      return total + price;
    }, 0);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
