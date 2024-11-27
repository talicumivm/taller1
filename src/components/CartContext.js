import { createContext, useContext, useState } from "react";

// Crea el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id)); // Elimina el ítem por su id
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
