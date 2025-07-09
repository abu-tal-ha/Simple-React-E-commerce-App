import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  const newCart = [...state];

  switch (action.type) {
    case "ADD": {
      if (!action.payload) return state;
      const existingIndex = newCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex !== -1) {
        newCart[existingIndex].quantity += 1;
        return newCart;
      } else {
        return [...newCart, { ...action.payload, quantity: 1 }];
      }
    }

    case "REMOVE":
      return newCart.filter((_, idx) => idx !== action.index);

    case "INCREASE":
      if (newCart[action.index]) {
        newCart[action.index].quantity += 1;
      }
      return [...newCart];

    case "DECREASE":
      if (newCart[action.index] && newCart[action.index].quantity > 1) {
        newCart[action.index].quantity -= 1;
      }
      return [...newCart];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
