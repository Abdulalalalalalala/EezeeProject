import { createContext, useReducer, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Set the initial state of the cart
const initialState = {
  cartItems: Cookies.get("cartItems") ? JSON.parse(Cookies.get("cartItems")) : [],
  totalItemCount: Cookies.get("totalItemCount") ? parseInt(Cookies.get("totalItemCount")) : 0,
};

// Define the reducer function to update the cart state based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const { updatedCartItems } = action.payload;

      // Calculate the total item count for the cart
      const totalItemCount = updatedCartItems.reduce((count, item) => count + item.quantity, 0);

      // Set the cart items and total item count in cookies for persistence
      Cookies.set("cartItems", JSON.stringify(updatedCartItems), { expires: 7 });
      Cookies.set("totalItemCount", totalItemCount, { expires: 7 });

      // Return the updated state with the new cart items and total item count
      return { ...state, cartItems: updatedCartItems, totalItemCount };
    }

    default:
      return state;
  }
}

// Define the cart provider component to wrap the application with the CartContext
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the addItemToCart function to update the cart when an item is added
  const addItemToCart = (product, quantity) => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };
    const existingItemIndex = state.cartItems.findIndex((item) => item.id === newItem.id);

    let updatedCartItems;
    if (existingItemIndex !== -1) {
      updatedCartItems = state.cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + newItem.quantity } : item
      );
    } else {
      updatedCartItems = [...state.cartItems, newItem];
    }

    // Calculate the total item count for the cart
    const totalItemCount = updatedCartItems.reduce((count, item) => count + item.quantity, 0);

    // Dispatch the CART_ADD_ITEM action to update the cart state
    dispatch({ type: "CART_ADD_ITEM", payload: { updatedCartItems, totalItemCount } });
  };

  // Define the value of the CartContext to be passed to child components
  const value = { ...state, addItemToCart };

  // Render the CartContext provider with the children components as its children
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
