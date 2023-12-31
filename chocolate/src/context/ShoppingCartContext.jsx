import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useShoppinCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useShoppinCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const carroLocalStorage = localStorage.getItem("cart") ?? [];
    setCart(
      carroLocalStorage.length > 0 ? JSON.parse(carroLocalStorage) : cart
    );
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
