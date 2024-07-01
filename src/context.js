import React, { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items: cartItems, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;